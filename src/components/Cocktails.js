import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CocktailsList from "./CocktailsList";
import Pagination from "./Pagination";
import NoCocktails from "./NoCocktails";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { default as ErrorComponent } from "./Error";
import { fetchCocktails } from "../api/cocktails";

function Cocktails({ ids = "", filterIsEnable = true }) {
  const [state, setState] = useState({
    cocktails: [],
    meta: {},
    loading: true,
    error: null,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  if (currentPage < 1) {
    setSearchParams({ ...searchParams, page: 1 });
  }

  useEffect(() => {
    const loadCocktails = async (page, ids, otherParams) => {
      try {
        setState({
          cocktails: [],
          meta: {},
          loading: true,
          error: null,
        });

        const data = await fetchCocktails({
          page,
          id: ids,
          otherParams: filterIsEnable ? otherParams : {},
        });

        setState({
          cocktails: data.data,
          meta: data.meta,
          loading: false,
          error: null,
        });
      } catch (e) {
        console.error(e);
        setState({ cocktails: [], meta: {}, loading: false, error: e });
      }
    };

    loadCocktails(currentPage, ids, readOtherParams(searchParams));
  }, [currentPage, ids, searchParams, filterIsEnable]);

  const goToPreviousPage = () => {
    setSearchParams({ ...searchParams, page: currentPage - 1 });
  };

  const goToNextPage = () => {
    setSearchParams({ ...searchParams, page: currentPage + 1 });
  };

  const { cocktails, meta, loading, error } = state;

  if (loading) return <Loading />;

  if (error) {
    if (error.status === 404) {
      return <NotFound />;
    }
    if (error.status === 0) {
      return (
        <ErrorComponent
          title="Offline"
          message="Cannot reach server. Check your connection."
        />
      );
    }
    return <ErrorComponent />;
  }

  if (currentPage > meta.lastPage) {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("page");
    setSearchParams(newParams);
  }

  if (cocktails.length <= 0) {
    return <NoCocktails />;
  }

  return (
    <>
      <CocktailsList cocktails={cocktails} />
      <Pagination
        currentPage={currentPage}
        lastPageNumber={meta.lastPage}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
    </>
  );
}

function readOtherParams(searchParams) {
  const filters = Object.fromEntries(
    Object.entries({
      sort: searchParams.get("sort"),
      alcoholic: searchParams.get("alcoholic"),
      category: searchParams.get("category"),
      glass: searchParams.get("glass"),
      name: searchParams.get("name"),
    }).filter(([_, value]) => value !== null)
  );

  return filters;
}

export { readOtherParams };
export default Cocktails;

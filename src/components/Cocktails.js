import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CocktailsList from "./CocktailsList";
import Pagination from "./Pagination";
import NoCocktails from "./NoCocktails";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { default as ErrorComponent } from "./Error";
import { fetchCocktails } from "../api/cocktails";

function Cocktails() {
  const [state, setState] = useState({
    cocktails: [],
    meta: {},
    loading: true,
    error: null,
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const loadCocktails = async (page) => {
      try {
        setState({
          cocktails: [],
          meta: {},
          loading: true,
          error: null,
        });

        const data = await fetchCocktails({ page });

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

    loadCocktails(currentPage);
  }, [currentPage]);

  const goToPreviousPage = () => {
    navigate(`/?page=${currentPage - 1}`);
  };

  const goToNextPage = () => {
    navigate(`/?page=${currentPage + 1}`);
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
    return <NotFound />;
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

export default Cocktails;

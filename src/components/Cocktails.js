import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CocktailsList from "./CocktailsList";
import Pagination from "./Pagination";
import NoCocktails from "./NoCocktails";
import Loading from "./Loading";

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchCocktails = async (page) => {
      try {
        const response = await fetch(
          `https://cocktails.solvro.pl/api/v1/cocktails?page=${page}`
        );

        if (!response.ok) {
          throw new Error(`ERROR: ${response.status}`);
        }

        const data = await response.json();
        setCocktails(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Data download error:", error);
        setLoading(false);
      }
    };

    fetchCocktails(currentPage);
  }, [currentPage]);

  const goToPreviousPage = () => {
    navigate(`/?page=${currentPage - 1}`);
  };

  const goToNextPage = () => {
    navigate(`/?page=${currentPage + 1}`);
  };

  return loading ? (
    <Loading />
  ) : cocktails.length > 0 ? (
    <>
      <CocktailsList cocktails={cocktails} />
      <Pagination
        currentPage={currentPage}
        lastPageNumber={15}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
    </>
  ) : (
    <NoCocktails />
  );
}

export default Cocktails;

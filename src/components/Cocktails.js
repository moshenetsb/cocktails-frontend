import React, { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(15);

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
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return loading ? (
    <div>Loading... Please wait</div>
  ) : cocktails.length > 0 ? (
    <div>
      <div className="cocktails">
        {cocktails.map((cocktail) => (
          <CocktailCard
            id={cocktail.id}
            name={cocktail.name}
            category={cocktail.category}
            imageUrl={cocktail.imageUrl}
          />
        ))}
      </div>
      <div className="karuzela">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  ) : (
    <div>No cocktails.</div>
  );
}

export default Cocktails;

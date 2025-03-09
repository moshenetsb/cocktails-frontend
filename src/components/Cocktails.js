import React, { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch(
          "https://cocktails.solvro.pl/api/v1/cocktails?page=3"
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

    fetchCocktails();
  }, []);

  return loading ? (
    <div>Loading... Please wait</div>
  ) : cocktails.length > 0 ? (
    cocktails.map((cocktail) => (
      <CocktailCard
        id={cocktail.id}
        name={cocktail.name}
        category={cocktail.category}
        imageUrl={cocktail.imageUrl}
      />
    ))
  ) : (
    <div>No cocktails.</div>
  );
}

export default Cocktails;

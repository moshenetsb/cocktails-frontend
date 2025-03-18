import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function CocktailDetails() {
  let [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch(
          `https://cocktails.solvro.pl/api/v1/cocktails/${id}`
        );

        if (!response.ok) {
          throw new Error(`ERROR: ${response.status}`);
        }

        const data = await response.json();
        setCocktail(data.data);
        console.log(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Data download error:", error);
        setLoading(false);
      }
    };

    fetchCocktails();
  }, [id]);

  return (
    <main>
      {loading ? (
        <div>Loading... Please wait</div>
      ) : cocktail === null ? (
        <div>Cocktail {id} not found.</div>
      ) : (
        <div className="cocktailDetails">
          <h1>{cocktail.name}</h1>
          <img src={cocktail.imageUrl} alt={"Image of cocktail " + id}></img>
          <p>Category: {cocktail.category}</p>
          <p>Glass: {cocktail.glass}</p>
          <p>Instruction: {cocktail.instructions}</p>
          <details>
            <summary>Ingredients</summary>{" "}
            {cocktail.ingredients.lenght == 0 ? (
              <p>No information about ingredients</p>
            ) : (
              <ul>
                {cocktail.ingredients.map((ingredient) => (
                  <li>
                    {ingredient.name} {ingredient.alcohol ? " (alcohol)" : ""}
                  </li>
                ))}
              </ul>
            )}
          </details>
        </div>
      )}
    </main>
  );
}

export default CocktailDetails;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFound from "./NotFound.js";

function CocktailDetails() {
  const [cocktail, setCocktail] = useState(null);
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
        setLoading(false);
      } catch (error) {
        console.error("Data download error:", error);
        setLoading(false);
      }
    };

    fetchCocktails();
  }, [id]);

  return (
    <>
      <div className="wrapper">
        {loading ? (
          <div>Loading... Please wait</div>
        ) : cocktail === null ? (
          <NotFound />
        ) : (
          <div className="cocktailDetails">
            <h2>{cocktail.name}</h2>

            <section>
              <img
                src={cocktail.imageUrl}
                alt={"Image of cocktail " + id}
              ></img>
              <div className="content">
                <p>
                  <b>
                    <u>Category:</u>
                  </b>{" "}
                  {cocktail.category}
                </p>
                <p>
                  <b>
                    <u>Glass:</u>
                  </b>{" "}
                  {cocktail.glass}
                </p>
                <p>
                  <b>
                    <u>Instruction:</u>
                  </b>{" "}
                  {cocktail.instructions}
                </p>
                <details>
                  <summary>
                    <b>
                      <u>Ingredients</u>
                    </b>
                  </summary>{" "}
                  {cocktail.ingredients.lenght === 0 ? (
                    <p>No information about ingredients</p>
                  ) : (
                    <ul>
                      {cocktail.ingredients.map((ingredient) => (
                        <li key={ingredient.id}>
                          {ingredient.name}{" "}
                          {ingredient.alcohol ? " (alcohol)" : ""}
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}

export default CocktailDetails;

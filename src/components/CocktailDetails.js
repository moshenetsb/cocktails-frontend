import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading.js";
import NotFound from "./NotFound.js";
import { default as ErrorComponent } from "./Error.js";
import { fetchCocktailById } from "../api/cocktails.js";

function CocktailDetails() {
  const [state, setState] = useState({
    cocktail: null,
    loading: true,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    async function loadCocktail() {
      try {
        setState({ cocktail: null, loading: true, error: null });
        const data = await fetchCocktailById(id);
        setState({ cocktail: data.data, loading: false, error: null });
      } catch (e) {
        console.error(e);
        setState({ cocktail: null, loading: false, error: e });
      }
    }

    loadCocktail();
  }, [id]);

  const { cocktail, loading, error } = state;

  if (loading) return <Loading />;

  if (error) {
    if (error.status === 404) {
      return <NotFound />;
    } else if (error.status === 0) {
      return (
        <ErrorComponent
          title="Offline"
          message="Cannot reach server. Check your connection."
        />
      );
    } else {
      return <ErrorComponent />;
    }
  }

  return (
    <>
      <div className="cocktailDetails">
        <h2>{cocktail.name}</h2>

        <section>
          <img src={cocktail.imageUrl} alt={"Image of cocktail " + id}></img>
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
                      {ingredient.name} {ingredient.alcohol ? " (alcohol)" : ""}
                    </li>
                  ))}
                </ul>
              )}
            </details>
          </div>
        </section>
      </div>
    </>
  );
}

export default CocktailDetails;

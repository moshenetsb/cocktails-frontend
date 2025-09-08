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
        const data = await fetchCocktailById({ id });
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

  return (
    <div className="cocktailDetails">
      <h1>{cocktail.name}</h1>

      <div className="main-info">
        <img src={cocktail.imageUrl} alt={cocktail.name} />

        <div className="cocktail-details-info">
          <h2>Category:</h2>
          <p>{cocktail.category}</p>

          <h2>Glass:</h2>
          <p>{cocktail.glass}</p>

          <h2>Alcoholic:</h2>
          <p>{cocktail.alcoholic ? "Yes" : "No"}</p>
        </div>
      </div>

      <div className="cocktail-instructions">
        <h2>Instructions:</h2>
        <p>{cocktail.instructions}</p>
      </div>

      <div className="cocktail-ingredients">
        <h2>Ingredients:</h2>
        <ul>
          {cocktail.ingredients.map((ing) => (
            <li key={ing.id}>
              {ing.measure} {ing.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CocktailDetails;

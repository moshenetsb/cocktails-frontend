import CocktailCard from "./CocktailCard";
import { useFavourites } from "../hooks/useFavourites";

function CocktailsList({ cocktails }) {
  const { addFavourite, removeFavourite, isFavourite } = useFavourites();

  return (
    <div className="cocktails">
      {cocktails.map((cocktail) => (
        <CocktailCard
          key={cocktail.id}
          {...cocktail}
          favourite={isFavourite(cocktail.id)}
          addFavourite={addFavourite}
          removeFavourite={removeFavourite}
        />
      ))}
    </div>
  );
}

export default CocktailsList;

import CocktailCard from "./CocktailCard";
import { useFavourites } from "../hooks/useFavourites";

function CocktailsList({ cocktails }) {
  const { dispatch: favouriteDispatch, isFavourite } = useFavourites();

  return (
    <div className="cocktails">
      {cocktails.map((cocktail) => (
        <CocktailCard
          key={cocktail.id}
          {...cocktail}
          favourite={isFavourite(cocktail.id)}
          favouriteDispatch={favouriteDispatch}
        />
      ))}
    </div>
  );
}

export default CocktailsList;

import { useFavourites } from "../hooks/FavouritesContext";
import NoCocktails from "./NoCocktails";

function Favourites() {
  const { favourites } = useFavourites();

  if (!favourites || favourites.length === 0) {
    return <NoCocktails message="You have no favourite cocktails yet." />;
  } else {
    return (
      <>
        <p>This functionality is not available yet</p>
      </>
    );
  }
}

export default Favourites;

import { useFavourites } from "../hooks/useFavourites";
import NoCocktails from "./NoCocktails";
import Cocktails from "./Cocktails";

function Favourites() {
  const { favourites } = useFavourites();

  if (!favourites || favourites.length === 0) {
    return <NoCocktails message="You have no favourite cocktails yet." />;
  }

  return <Cocktails ids={favourites.join(",")} filterIsEnable={false} />;
}

export default Favourites;

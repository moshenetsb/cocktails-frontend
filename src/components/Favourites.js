import { useReducer } from "react";
import NoCocktails from "./NoCocktails";

function loadFavouritesFromLocalStorage(initialStateFromProps) {
  const data = window.localStorage.getItem("favourites");
  return data ? JSON.parse(data) : {};
}

function Favourites() {
  const [favourites, dispatch] = useReducer(
    null,
    {},
    loadFavouritesFromLocalStorage
  );
  console.log(Object.keys(favourites));
  if (Object.keys(favourites)) {
    return <NoCocktails />;
  } else {
    return (
      <>
        <p>This functionality is not available yet</p>
      </>
    );
  }
}

export default Favourites;

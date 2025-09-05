import { useFavourites } from "../hooks/useFavourites";

function FavouritesHeader() {
  const { favourites, clearFavourites } = useFavourites();

  return (
    <header className="favourites-header">
      <div className="wrapper">
        <h1>Favourites</h1>
        <button onClick={clearFavourites} disabled={favourites.length === 0}>
          Clear All
        </button>
      </div>
    </header>
  );
}

export default FavouritesHeader;

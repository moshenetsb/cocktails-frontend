import { useFavourites } from "../hooks/useFavourites";
import { FAVOURITES_ACTIONS } from "../hooks/useFavourites";

function FavouritesHeader() {
  const { favourites, dispatch: favouriteDispatch } = useFavourites();

  return (
    <header className="favourites-header">
      <div className="wrapper">
        <h1>Favourites</h1>
        <button
          onClick={() => favouriteDispatch({ type: FAVOURITES_ACTIONS.CLEAR })}
          disabled={favourites.length === 0}
        >
          Clear All
        </button>
      </div>
    </header>
  );
}

export default FavouritesHeader;

import { useContext, createContext, useReducer, useEffect } from "react";

const FavouritesContext = createContext();
FavouritesContext.displayName = "FavouritesContext";

const FAVOURITES_ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR",
};

function favouritesReducer(state, action) {
  switch (action.type) {
    case FAVOURITES_ACTIONS.ADD:
      if (state.includes(action.id)) return state;
      return [...state, action.id].sort();
    case FAVOURITES_ACTIONS.REMOVE:
      return state.filter((favId) => favId !== action.id);
    case FAVOURITES_ACTIONS.CLEAR:
      return [];
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function FavouritesProvider(props) {
  const [favourites, dispatch] = useReducer(favouritesReducer, [], () => {
    const saved = window.localStorage.getItem("cocktails-app:favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    window.localStorage.setItem(
      "cocktails-app:favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  function isFavourite(id) {
    return favourites.includes(id);
  }

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        dispatch,
        isFavourite,
      }}
      {...props}
    />
  );
}

function useFavourites() {
  const context = useContext(FavouritesContext);

  if (!context) {
    throw new Error(
      "'useFavourites' must be used within a 'FavouritesProvider'"
    );
  }

  return context;
}

export { FAVOURITES_ACTIONS, FavouritesProvider, useFavourites };

import { useContext, createContext, useState, useEffect } from "react";

const FavouritesContext = createContext();
FavouritesContext.displayName = "FavouritesContext";

function FavouritesProvider(props) {
  const [favourites, setFavourites] = useState(() => {
    const saved = window.localStorage.getItem("cocktails-app:favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    window.localStorage.setItem(
      "cocktails-app:favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  function addFavourite(id) {
    if (!isFavourite(id)) {
      setFavourites((prev) => [...prev, id].sort());
    }
  }

  function removeFavourite(id) {
    setFavourites((prev) => prev.filter((favId) => favId !== id));
  }

  function isFavourite(id) {
    return favourites.includes(id);
  }

  function clearFavourites() {
    setFavourites([]);
  }

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite,
        clearFavourites,
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

export { FavouritesProvider, useFavourites };

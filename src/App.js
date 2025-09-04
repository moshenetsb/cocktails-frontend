import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import FavouritesScreen from "./screens/FavouritesScreen.js";
import CocktailDetailsScreen from "./screens/CocktailDetailsScreen.js";
import NotFoundScreen from "./screens/NotFoundScreen.js";
import { FavouritesProvider } from "./hooks/useFavourites.js";

function App() {
  //------------------------------------------
  //For gh-pages
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [location, navigate]);
  //------------------------------------------

  return (
    <div className="App">
      <FavouritesProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/favourites" element={<FavouritesScreen />} />
          <Route path="/cocktails/:id" element={<CocktailDetailsScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </FavouritesProvider>
    </div>
  );
}

export default App;

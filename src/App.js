import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.js";
import FavouritesScreen from "./screens/FavouritesScreen.js";
import CocktailDetailsScreen from "./screens/CocktailDetailsScreen.js";
import NotFoundScreen from "./screens/NotFoundScreen.js";
import { FavouritesProvider } from "./hooks/FavouritesContext.js";

function App() {
  return (
    <div className="App">
      <FavouritesProvider>
        <Router basename="/cocktails-frontend">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/favourites" element={<FavouritesScreen />} />
            <Route path="/cocktails/:id" element={<CocktailDetailsScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </Router>
      </FavouritesProvider>
    </div>
  );
}

export default App;

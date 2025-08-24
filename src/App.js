import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Cocktails from "./components/Cocktails.js";
import Favourites from "./components/Favourites.js";
import Footer from "./components/Footer.js";
import CocktailDetails from "./components/CocktailDetails.js";
import NotFound from "./components/NotFound.js";
function App() {
  return (
    <div className="App">
      <Navigation />

      <main>
        <div className="main-wrapper">
          <Routes>
            <Route path="/" element={<Cocktails />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/cocktails/:id" element={<CocktailDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

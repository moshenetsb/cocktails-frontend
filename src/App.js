import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";
import Favourites from "./components/Favourites.js";
import Footer from "./components/Footer.js";
import CocktailDetails from "./components/CocktailDetails.js";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <Router basename="/cocktails-frontend">
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cocktails/:id" element={<CocktailDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

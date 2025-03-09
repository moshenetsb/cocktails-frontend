import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";
import Favourites from "./components/Favourites.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

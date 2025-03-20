import logo from "./logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="navwrapper">
        <img src={logo} alt="Logo" />
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
}

export default NavBar;

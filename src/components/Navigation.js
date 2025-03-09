import logo from "./logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <Link to="/">Home</Link>
      <Link to="/favourites">Favourites</Link>
    </nav>
  );
}

export default NavBar;

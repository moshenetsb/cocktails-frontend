import logo from "./logo_solvro_mono.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="site-logo">
          <img src={logo} alt="Logo" />
          <p>Cocktails App</p>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

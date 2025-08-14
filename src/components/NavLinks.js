import { Link } from "react-router-dom";

function NavLinks({ isOpen, closeMobileMenu }) {
  return (
    <div className={`nav-links${isOpen ? " show" : ""}`}>
      <ul>
        <li>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/favourites" onClick={closeMobileMenu}>
            Favourites
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;

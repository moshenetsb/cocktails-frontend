import { useState } from "react";
import SiteLogo from "./SiteLogo";
import NavLinks from "./NavLinks";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="nav-wrapper">
        <SiteLogo />
        <button
          className="mobile-menu-button"
          onClick={() => {
            isOpen ? closeMobileMenu() : openMobileMenu();
          }}
        >
          {isOpen ? "\u26CC" : "\u2630"}
        </button>
        <NavLinks isOpen={isOpen} closeMobileMenu={closeMobileMenu} />
      </div>
    </nav>
  );
}

export default NavBar;

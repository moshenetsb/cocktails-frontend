import logo from "../assets/logo_solvro_mono.png";
import { Link } from "react-router-dom";

function SiteLogo() {
  return (
    <div className="site-logo">
      <Link to="/">
        <img src={logo} alt="Cocktails App Logo" />
        <span>Cocktails App</span>
      </Link>
    </div>
  );
}

export default SiteLogo;

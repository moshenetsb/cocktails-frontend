import logo from "../images/logo_solvro_mono.png";
import { Link } from "react-router-dom";

function SiteLogo() {
  return (
    <div className="site-logo">
      <Link to="/">
        <img src={logo} alt="Cocktails App Logo" />
        <h1>Cocktails App</h1>
      </Link>
    </div>
  );
}

export default SiteLogo;

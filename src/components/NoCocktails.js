import no_cocktails_available from "../images/no_cocktails_available.png";

function NoCocktails({ message = "NO COCKTAILS AVAILABLE" }) {
  return (
    <div className="no-cocktails">
      <img src={no_cocktails_available} alt="No cocktails available"></img>
      <h2>{message}</h2>
    </div>
  );
}

export default NoCocktails;

import no_cocktails_available from "../images/no_cocktails_available.png";

function NoCocktails() {
  return (
    <div className="no-cocktails">
      <img src={no_cocktails_available} alt="No cocktails available"></img>
      <h2>NO COCKTAILS AVAILABLE</h2>
    </div>
  );
}

export default NoCocktails;

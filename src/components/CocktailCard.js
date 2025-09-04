import { useNavigate } from "react-router-dom";
import { ReactComponent as Heart } from "../assets/heart.svg";

function CocktailCard({
  id,
  name,
  category,
  imageUrl,
  favourite = false,
  addFavourite,
  removeFavourite,
}) {
  const navigate = useNavigate();

  function handleRedirectToDetails() {
    navigate(`/cocktails/${id}`);
  }

  function toggleFavourite() {
    if (favourite) removeFavourite(id);
    else addFavourite(id);
  }

  return (
    <div className="cocktail-card">
      <img src={imageUrl} alt={"Image of cocktail " + name} />
      <div className="cocktail-info">
        <h2>{name}</h2>
        <p>{category}</p>
      </div>
      <div className="cocktail-card-actions">
        <button
          className="details-button"
          onClick={handleRedirectToDetails}
          aria-label="View cocktail details"
        >
          Details
        </button>
        <button
          className="favourite-button"
          onClick={toggleFavourite}
          aria-label={
            favourite ? "Remove from favourites" : "Add to favourites"
          }
        >
          <Heart
            fill={favourite ? "#ff6347" : "none"}
            stroke={favourite ? "#ff6347" : "currentColor"}
            strokeWidth="1.5"
          />
        </button>
      </div>
    </div>
  );
}

export default CocktailCard;

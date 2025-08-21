import { useNavigate } from "react-router-dom";

function CocktailCard({ id, name, category, imageUrl }) {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(`/cocktails/${id}`);
  }

  return (
    <div className="cocktail-card">
      <img src={imageUrl} alt={"Image of cocktail " + name} />
      <div className="cocktail-info">
        <h2>{name}</h2>
        <p>{category}</p>
      </div>
      <div className="cocktail-card-actions">
        <button className="details-button" onClick={handleRedirect}>
          Details
        </button>
        <button className="favourite-button">♡</button>
      </div>
    </div>
  );
}

export default CocktailCard;

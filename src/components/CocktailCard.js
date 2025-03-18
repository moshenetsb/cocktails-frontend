import { useNavigate } from "react-router-dom";

function CocktailCard({ id, name, category, imageUrl }) {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(`/cocktails/${id}`);
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{category}</p>
      <img src={imageUrl} alt={"Image of cocktail " + id} />
      <button onClick={handleRedirect}>Details</button>
    </div>
  );
}

export default CocktailCard;

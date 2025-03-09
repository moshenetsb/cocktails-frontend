function CocktailCard({ id, name, category, imageUrl }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{category}</p>
      <img src={imageUrl} alt={"Image of cocktail " + id} />
      <button>Details</button>
    </div>
  );
}

export default CocktailCard;

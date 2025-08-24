import CocktailCard from "./CocktailCard";

function CocktailsList({ cocktails }) {
  return (
    <div className="cocktails">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.id} {...cocktail} />
      ))}
    </div>
  );
}

export default CocktailsList;

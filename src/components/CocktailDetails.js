import { useParams } from "react-router-dom";

function CocktailDetails() {
  const { id } = useParams();

  return <main>{id}</main>;
}

export default CocktailDetails;

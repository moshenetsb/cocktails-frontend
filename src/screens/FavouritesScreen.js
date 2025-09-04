import MainLayout from "../layouts/MainLayout";
import Favourites from "../components/Favourites";
import FavouritesHeader from "../components/FavouritesHeader";

function FavouritesScreen() {
  return (
    <MainLayout header={FavouritesHeader}>
      <Favourites />
    </MainLayout>
  );
}

export default FavouritesScreen;

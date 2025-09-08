import MainLayout from "../layouts/MainLayout";
import Cocktails from "../components/Cocktails";
import FilterPanel from "../components/FiltersForm";

function HomeScreen() {
  return (
    <MainLayout header={FilterPanel}>
      <Cocktails filterIsEnable={true} />
    </MainLayout>
  );
}

export default HomeScreen;

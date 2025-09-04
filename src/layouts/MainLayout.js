import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";
import useScrollToTop from "../hooks/useScrollToTop.js";

function MainLayout({ children, header: HeaderComponent }) {
  useScrollToTop();

  return (
    <>
      <Navigation />
      {HeaderComponent ? <HeaderComponent /> : null}

      <main>
        <div className="main-wrapper">{children}</div>
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;

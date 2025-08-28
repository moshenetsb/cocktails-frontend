import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";
import useScrollToTop from "../hooks/useScrollToTop.js";

function MainLayout({ children }) {
  useScrollToTop();

  return (
    <>
      <Navigation />

      <main>
        <div className="main-wrapper">{children}</div>
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;

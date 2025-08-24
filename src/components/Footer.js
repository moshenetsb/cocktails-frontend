function Footer() {
  function CopyrightSection() {
    return (
      <div className="copyright-section">
        <p>
          Made by{" "}
          <a
            href="https://github.com/moshenetsb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bohdan Moshenets
          </a>{" "}
          &copy; 2025
        </p>
      </div>
    );
  }

  function DescriptionSection() {
    return (
      <div className="description-section">
        <p>
          This is a simple React app that allows users to search and browse
          information about cocktails. It uses the{" "}
          <a
            href="https://cocktails.solvro.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cocktail API
          </a>{" "}
          to retrieve cocktail recipes and display them in a user-friendly
          interface.
        </p>

        <p>
          It was developed as part of a recruitment challenge organized by{" "}
          <a
            href="https://solvro.pwr.edu.pl/pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KN Solvro.
          </a>
        </p>
      </div>
    );
  }

  return (
    <footer>
      <DescriptionSection />
      <CopyrightSection />
    </footer>
  );
}

export default Footer;

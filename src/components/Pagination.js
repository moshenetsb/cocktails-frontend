function Pagination({
  currentPage,
  lastPageNumber,
  goToPreviousPage,
  goToNextPage,
}) {
  return (
    <div className="pagination">
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        &#10094;
      </button>
      <span>{currentPage}</span>
      <button onClick={goToNextPage} disabled={currentPage === lastPageNumber}>
        &#10095;
      </button>
      <span> of 15</span>
    </div>
  );
}

export default Pagination;

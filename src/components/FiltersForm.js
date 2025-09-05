import { useSearchParams } from "react-router-dom";
import { readOtherParams } from "./Cocktails";
import { useState } from "react";

function FiltersForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    sort: "",
    alcoholic: "",
    category: "",
    glass: "",
    name: "",
    ...readOtherParams(searchParams),
  });

  function handleSubmit(e) {
    e.preventDefault();

    const cleanParams = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== "")
    );

    setSearchParams({ ...cleanParams, page: 1 });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  function clearFilters() {
    setFilters({
      sort: "",
      alcoholic: "",
      category: "",
      glass: "",
      name: "",
    });
    setSearchParams({});
  }

  return (
    <form className="filter-panel" onSubmit={handleSubmit}>
      <div className="form-block">
        <label htmlFor="name">Cocktail name:</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Type here..."
          value={filters.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-block">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All</option>
        </select>
      </div>

      <div className="form-block">
        <label htmlFor="alcoholic">Alcoholic:</label>
        <select
          id="alcoholic"
          name="alcoholic"
          value={filters.alcoholic}
          onChange={handleChange}
        >
          <option value="">-</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <div className="form-block">
        <label htmlFor="glass">Glass:</label>
        <select
          id="glass"
          name="glass"
          value={filters.glass}
          onChange={handleChange}
        >
          <option value="">All</option>
        </select>
      </div>

      <div className="form-block">
        <label htmlFor="sort">Sort:</label>
        <select
          id="sort"
          name="sort"
          value={filters.sort}
          onChange={handleChange}
        >
          <option value="">-</option>
          <option value="+name">Name A-Z</option>
          <option value="-name">Name Z-A</option>
          <option value="+category">Category A-Z</option>
          <option value="-category">Category Z-A</option>
          <option value="+glass">Glass A-Z</option>
          <option value="-glass">Glass Z-A</option>
        </select>
      </div>

      <div className="filter-actions">
        <button type="submit">Apply Filters</button>
        <button onClick={clearFilters}>Clear Filters</button>
      </div>
    </form>
  );
}

export default FiltersForm;

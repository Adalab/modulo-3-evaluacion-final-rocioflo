function FilterByName({ handleFilters, filters }) {
  return (
    <label className="filter-name-label">
      Busca un personaje
      <input
        id="name"
        onChange={handleFilters}
        value={filters.name}
        className="filter-name-input"
        placeholder="Harry..."
      />
    </label>
  );
}
export default FilterByName;

function FilterByName({ handleFilters, filters }) {
  return (
    <label>
      Busca por personaje
      <input id="name" onChange={handleFilters} value={filters.name} />
    </label>
  );
}
export default FilterByName;

function FilterByGender({ handleFilters, filters }) {
  return (
    <label className="filter-by-gender">
      Busca por género
      <select id="gender" onChange={handleFilters} value={filters.gender}>
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
        <option value="non-binary">No binario</option>
      </select>
    </label>
  );
}
export default FilterByGender;

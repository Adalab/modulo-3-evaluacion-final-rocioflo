function FilterByGender({ handleFilters, filters }) {
  return (
    <label className="filter-gender-label">
      ¡Y su género!
      <select
        id="gender"
        onChange={handleFilters}
        value={filters.gender}
        className="filter-gender-input"
      >
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
        <option value="non-binary">No binario</option>
      </select>
    </label>
  );
}
export default FilterByGender;

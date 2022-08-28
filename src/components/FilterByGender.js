function FilterByGender() {
  return (
    <label className="filter-by-gender">
      Busca por género
      <select>
        <option>Masculino</option>
        <option>Femenino</option>
        <option>No binario</option>
      </select>
    </label>
  );
}
export default FilterByGender;

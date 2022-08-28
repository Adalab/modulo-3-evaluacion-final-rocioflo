function FilterByHouse({ handleFilters, filters }) {
  return (
    <label>
      Selecciona la casa
      <select id="house" onChange={handleFilters} value={filters.house}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Slytherin">Slytherin</option>
        <option value="none">Ninguna</option>
      </select>
    </label>
  );
}

export default FilterByHouse;

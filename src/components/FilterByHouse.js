function FilterByHouse({ handleFilters, filters }) {
  return (
    <label className="filter-house-label">
      Selecciona su casa
      <select
        id="house"
        onChange={handleFilters}
        value={filters.house}
        className="filter-house-input"
      >
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

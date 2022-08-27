import FilterByName from './FilterByName';

function Filters({ handleFilteredData, filteredData, filteredCharacterList }) {
  return (
    <form>
      <FilterByName
        handleFilteredData={handleFilteredData}
        filteredData={filteredData}
      />
      <label>
        Selecciona la casa:
        <select>
          <option>Gryffindor</option>
          <option>Ravenclaw</option>
          <option>Hufflepuff</option>
          <option>Slytherin</option>
        </select>
      </label>
    </form>
  );
}
export default Filters;

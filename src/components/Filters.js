import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';

function Filters({
  handleFilterByHouse,
  handleFilters,
  filteredByName,
  handleFilterByName,
}) {
  return (
    <form>
      <FilterByName
        handleFilters={handleFilters}
        handleFilterByName={handleFilterByName}
        filteredByName={filteredByName}
      />
      <FilterByHouse handleFilterByHouse={handleFilterByHouse} />
    </form>
  );
}
export default Filters;

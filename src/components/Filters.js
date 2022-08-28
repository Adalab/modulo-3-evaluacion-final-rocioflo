import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import FilterByGender from './FilterByGender';

function Filters({
  handleFilterByHouse,
  handleFilters,
  filteredByName,
  handleFilterByName,
}) {
  return (
    <form className="filters-form">
      <FilterByName
        handleFilters={handleFilters}
        handleFilterByName={handleFilterByName}
        filteredByName={filteredByName}
      />
      <FilterByHouse handleFilterByHouse={handleFilterByHouse} />
      <FilterByGender />
    </form>
  );
}
export default Filters;

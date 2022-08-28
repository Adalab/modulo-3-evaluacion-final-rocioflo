import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import FilterByGender from './FilterByGender';

function Filters({ handleFilters, filters }) {
  return (
    <form className="filters-form">
      <FilterByName handleFilters={handleFilters} filters={filters} />
      <FilterByHouse handleFilters={handleFilters} filters={filters} />
      <FilterByGender handleFilters={handleFilters} filters={filters} />
    </form>
  );
}
export default Filters;

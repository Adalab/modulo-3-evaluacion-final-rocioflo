import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import FilterByGender from './FilterByGender';
import ResetButton from './ResetButton';

function Filters({ handleFilters, filters, handleReset }) {
  return (
    <form className="filters-form">
      <FilterByName handleFilters={handleFilters} filters={filters} />
      <FilterByHouse handleFilters={handleFilters} filters={filters} />
      <FilterByGender handleFilters={handleFilters} filters={filters} />
      <ResetButton handleReset={handleReset} />
    </form>
  );
}
export default Filters;

import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import FilterByGender from './FilterByGender';
import ResetButton from './ResetButton';
import ListOrder from './ListOrder';

import '../styles/Filters.scss';

function Filters({ handleFilters, filters, handleReset, listOrdering }) {
  return (
    <form className="filters-form">
      <FilterByName handleFilters={handleFilters} filters={filters} />
      <FilterByHouse handleFilters={handleFilters} filters={filters} />
      <FilterByGender handleFilters={handleFilters} filters={filters} />
      <ListOrder listOrdering={listOrdering} />
      <ResetButton handleReset={handleReset} />
    </form>
  );
}
export default Filters;

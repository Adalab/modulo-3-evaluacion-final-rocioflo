import PropTypes from 'prop-types';
function FilterByName({ handleFilters, filters }) {
  return (
    <label className="filter-name-label" htmlFor="name">
      Busca un personaje
      <input
        id="name"
        onChange={handleFilters}
        value={filters.name}
        className="filter-name-input"
        placeholder="Harry..."
      />
    </label>
  );
}

FilterByName.defaultProps = {
  name: '',
  species: '',
  gender: '',
  house: '',
  status: '',
};

FilterByName.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default FilterByName;

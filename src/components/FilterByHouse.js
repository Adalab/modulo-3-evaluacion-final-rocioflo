import PropTypes from 'prop-types';
function FilterByHouse({ handleFilters, filters }) {
  return (
    <label className="filter-house-label" htmlFor="house">
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
        <option value="Ninguna">Ninguna</option>
      </select>
    </label>
  );
}

FilterByHouse.defaultProps = {
  name: '',
  species: '',
  gender: '',
  house: '',
  status: '',
};

FilterByHouse.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default FilterByHouse;

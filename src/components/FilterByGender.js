import PropTypes from 'prop-types';

function FilterByGender({ handleFilters, filters }) {
  return (
    <label className="filter-gender-label" htmlFor="gender">
      ¡Y su género!
      <select
        id="gender"
        onChange={handleFilters}
        value={filters.gender}
        className="filter-gender-input"
      >
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
        <option value="non-binary">No binario</option>
      </select>
    </label>
  );
}

FilterByGender.defaultProps = {
  name: '',
  species: '',
  gender: '',
  house: '',
  status: '',
};

FilterByGender.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default FilterByGender;

import CharactersListItem from './CharactersListItem';

import '../styles/CharacterList.scss';

import PropTypes from 'prop-types';

function CharactersList({ filteredList, isLoading, filters, listOrdering }) {
  if (isLoading) {
    return (
      <p className="loading-message">
        Juro solemnemente que estoy llamando a la Api.
      </p>
    );
  }

  if (filteredList.length === 0) {
    return (
      <div className="character-notfound-text">
        <p>
          No hemos encontrado un personaje con las siguientes características:
        </p>
        <ul>
          <li>Nombre: {filters.name}</li>
          <li>Casa: {filters.house}</li>
          <li>Género: {filters.gender}</li>
        </ul>
        <p>Cambia tus criterios de búsqueda... ¡O invéntalo tú!</p>
      </div>
    );
  }
  return (
    <ul className="characters-list">
      <CharactersListItem
        filteredList={filteredList}
        listOrdering={listOrdering}
      />
    </ul>
  );
}

CharactersList.defaultProps = {
  name: '',
  species: '',
  gender: '',
  house: '',
  status: '',
  isLoading: true,
  filteredList: [],
};

CharactersList.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  filteredList: PropTypes.array.isRequired,
};

export default CharactersList;

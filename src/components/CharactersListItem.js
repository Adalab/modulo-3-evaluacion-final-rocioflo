import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharactersListItem({ filteredList }) {
  const renderCharacterList = () => {
    const characterList = filteredList.map((character) => {
      console.log(character.species);
      return (
        <Link
          to={`/characterDetail/${character.id}`}
          key={character.id}
          className="character-item-link"
        >
          <li className="character-item">
            <img
              src={character.image}
              className="character-pic"
              alt={`This is ${character.name}`}
            />
            <p className="character-name">{character.name}</p>
            <p className="character-species">
              {character.species.toUpperCase()}
            </p>
          </li>
        </Link>
      );
    });
    return characterList;
  };

  return renderCharacterList();
}

CharactersListItem.defaultProps = {
  filteredList: [],
};

CharactersListItem.propTypes = {
  filteredList: PropTypes.array.isRequired,
};

export default CharactersListItem;

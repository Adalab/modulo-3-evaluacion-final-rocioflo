import { Link } from 'react-router-dom';

function CharactersListItem({ filteredList, characterData }) {
  const renderCharacterList = () => {
    const characterList = characterData.map((character, index) => {
      return (
        <Link to={`/characterDetail/${index}`}>
          <li className="character-item" key={index}>
            <img
              src={character.image}
              className="character-pic"
              alt={`This is ${character.name}`}
            />
            <p className="character-name">{character.name}</p>
            <p className="character-species">{character.species}</p>
          </li>
        </Link>
      );
    });

    return characterList;
  };

  return renderCharacterList();
}
export default CharactersListItem;

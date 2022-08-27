function CharactersList({ characterData }) {
  const renderCharacterList = () => {
    const characterList = characterData.map((character, index) => {
      return (
        <li className="character-item" key={index}>
          <img
            src={character.image}
            className="character-pic"
            alt={`This is ${character.name}`}
          />
          <p className="character-name">{character.name}</p>
          <p className="character-species">{character.species}</p>
        </li>
      );
    });

    return characterList;
  };

  return renderCharacterList();
}

export default CharactersList;

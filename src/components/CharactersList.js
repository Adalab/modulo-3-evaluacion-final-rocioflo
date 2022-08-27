import CharactersListItem from './CharactersListItem';

function CharactersList({ characterData, filteredList }) {
  return (
    <ul className="characters-list">
      <CharactersListItem
        characterData={characterData}
        filteredList={filteredList}
      />
    </ul>
  );
}

export default CharactersList;

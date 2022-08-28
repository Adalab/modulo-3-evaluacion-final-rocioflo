import CharactersListItem from './CharactersListItem';

function CharactersList({ filteredList, isLoading }) {
  if (isLoading) {
    return <p>Juro solemnemente que estoy llamando a la Api</p>;
  }

  if (filteredList.length === 0) {
    console.log('alo presidente');
    return <p>El personaje que buscas no existe. ¡Invéntalo tú!</p>;
  }
  return (
    <ul className="characters-list">
      <CharactersListItem filteredList={filteredList} />
    </ul>
  );
}

export default CharactersList;

import { Link } from 'react-router-dom';

import '../styles/CharacterDetail.scss';

function CharacterDetail({ characterFound, characterData }) {
  const characterObjectFound = characterData.filter((character) => {
    return character.id === characterFound;
  });

  if (characterObjectFound.length === 0) {
    return (
      <div className="character-detail-page">
        <Link to="/" className="link-back">
          Back to list
        </Link>
        <div className="character-detail">
          <p>No hay personajes en esa url, pillín</p>
        </div>
      </div>
    );
  }

  const characterDetail = characterObjectFound[0];

  return (
    <div className="character-detail-page">
      <Link to="/" className="link-back">
        Back to list
      </Link>
      <div className="character-detail">
        <img
          src={characterDetail.image}
          alt={`This is ${characterDetail.name}`}
        />
        <div>
          <h2>{characterDetail.name}</h2>
          <p>Status: {characterDetail.status}</p>
          <p>Species: {characterDetail.species}</p>
          <p>Gender: {characterDetail.gender}</p>
          <p>Hogwarts House: {characterDetail.house}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;

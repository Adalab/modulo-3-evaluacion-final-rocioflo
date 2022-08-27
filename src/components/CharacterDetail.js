import { Link } from 'react-router-dom';

function CharacterDetail({ characterData, characterFound }) {
  const characterDetail = characterData[characterFound];

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

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/CharacterDetail.scss';
import placeholder from '../images/placeholder.jpg';

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
        <div className="false-url-message">
          <p className="false-url-text">
            No hay personajes en esa url, pillín.
          </p>
        </div>
      </div>
    );
  }

  const characterDetail = characterObjectFound[0];
  console.log(characterDetail);

  return (
    <div className="character-detail-page">
      <Link to="/" className="link-back">
        Atrás
      </Link>
      <div className={`character-detail ${characterDetail.house}`}>
        <img
          src={characterDetail.image}
          alt={`This is ${characterDetail.name}`}
          className="character-detail-pic"
        />
        <div className="character-detail-info">
          <h2 className="info-name">{characterDetail.name}</h2>
          <p>Estatus: {characterDetail.status}</p>
          <p>Especie: {characterDetail.species}</p>
          <p>Género: {characterDetail.gender}</p>
          <p>Casa de Hogwarts: {characterDetail.house}</p>
        </div>
        {/* <img
          src={require(`../images/${characterDetail.house}.png`)}
          alt={`${characterDetail.house}'s emblem`}
        /> */}
      </div>
    </div>
  );
}

CharacterDetail.defaultProps = {
  name: '',
  status: '',
  species: '',
  gender: '',
  house: '',
  image: placeholder,
};

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterDetail;

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

  let lifeStatusIcon =
    characterDetail.status === 'aún dando guerra' ? (
      <i className="fa-solid fa-heart"></i>
    ) : (
      <i className="fa-solid fa-skull"></i>
    );

  let speciesIcon = '';

  const speciesIconChanger = () => {
    if (characterDetail.species === 'human') {
      speciesIcon = <i className="fa-solid fa-person"></i>;
    }

    if (characterDetail.species === 'half-human') {
      speciesIcon = <i className="fa-solid fa-user-large"></i>;
    }

    if (characterDetail.species === 'acromantula') {
      speciesIcon = <i className="fa-solid fa-spider"></i>;
    }

    if (characterDetail.species === 'centaur') {
      speciesIcon = <i className="fa-solid fa-horse"></i>;
    }

    if (characterDetail.species === 'ghost') {
      speciesIcon = <i className="fa-solid fa-ghost"></i>;
    }

    if (characterDetail.species === 'goblin') {
      speciesIcon = <i className="fa-solid fa-child"></i>;
    }

    if (characterDetail.species === 'hippogriff') {
      speciesIcon = <i className="fa-solid fa-cow"></i>;
    }

    if (characterDetail.species === 'house-elf') {
      speciesIcon = <i className="fa-solid fa-socks"></i>;
    }

    if (characterDetail.species === 'werewolf') {
      speciesIcon = <i className="fa-solid fa-dog"></i>;
    }

    if (characterDetail.species === 'three-headed dog') {
      speciesIcon = <i className="fa-solid fa-paw"></i>;
    }

    if (characterDetail.species === 'giant') {
      speciesIcon = <i className="fa-solid fa-person-arrow-up-from-line"></i>;
    }

    if (characterDetail.species === 'owl') {
      speciesIcon = <i className="fa-solid fa-feather"></i>;
    }

    if (characterDetail.species === 'half-giant') {
      speciesIcon = <i className="fa-solid fa-arrows-down-to-people"></i>;
    }
    if (characterDetail.species === 'cat') {
      speciesIcon = <i className="fa-solid fa-cat"></i>;
    }

    if (characterDetail.species === 'dragon') {
      speciesIcon = <i className="fa-solid fa-dragon"></i>;
    }

    if (characterDetail.species === 'poltergeist') {
      speciesIcon = <i className="fa-solid fa-mask"></i>;
    }

    if (characterDetail.species === 'vampire') {
      speciesIcon = <i className="fa-solid fa-gem"></i>;
    }
  };
  speciesIconChanger();

  let houseIcon = '';

  const houseIconChanger = () => {
    if (characterDetail.house === 'Gryffindor') {
      houseIcon = <i className="fa-solid fa-hippo"></i>;
    }

    if (characterDetail.house === 'Ravenclaw') {
      houseIcon = <i className="fa-solid fa-crow"></i>;
    }

    if (characterDetail.house === 'Hufflepuff') {
      houseIcon = <i className="fa-solid fa-otter"></i>;
    }

    if (characterDetail.house === 'Slytherin') {
      houseIcon = <i className="fa-solid fa-staff-snake"></i>;
    }
  };

  houseIconChanger();

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
          <p>
            Estatus: {characterDetail.status} {lifeStatusIcon}
          </p>
          <p>
            Especie: {characterDetail.species} {speciesIcon}
          </p>
          <p>Género: {characterDetail.gender}</p>
          <p>
            Casa de Hogwarts: {characterDetail.house} {houseIcon}
          </p>
        </div>
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

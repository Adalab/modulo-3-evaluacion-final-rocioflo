import { v4 as uuidv4 } from 'uuid';
import placeholder from '../images/placeholder.jpg';

const callToApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          species: character.species,
          gender: character.gender,
          image: character.image || placeholder,
          house: character.house || 'Ninguna',
          status: character.alive === true ? 'aún dando guerra' : 'bajo tierra',
          id: uuidv4(),
        };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default callToApi;

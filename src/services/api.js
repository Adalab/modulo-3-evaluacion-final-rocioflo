const callToApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          species: character.species.toUpperCase(),
          gender: character.gender,
          image:
            character.image ||
            'https://via.placeholder.com/210x295/ffffff/666666/?text=Evanesco!',
          house: character.house || 'none',
          status: character.alive === true ? 'alive' : 'dead',
        };
      });
      return cleanData;
    });
};

export default callToApi;

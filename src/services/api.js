const callToApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          species: character.species,
          gender: character.gender,
          image: character.image,
          house: character.house,
          status: character.alive,
        };
      });
      console.log(cleanData);
      return cleanData;
    });
};

export default callToApi;

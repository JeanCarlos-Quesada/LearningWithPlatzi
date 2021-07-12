const axios = require("axios").default;

const getAll = () => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((result) => {
      console.log("Entro");
      let characters = result.data.results[0];
      console.log(`Character Name: ${characters.name}`);
      getLocationInfo(characters.location.url);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getLocationInfo = (url) => {
  axios
    .get(url)
    .then((result) => {
      let dimensionData = result.data;
      console.log(`Dimesion: ${dimensionData.dimension}`);
      console.log(`Dimension Name: ${dimensionData.name}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

getAll();

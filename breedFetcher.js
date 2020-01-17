const request = require('request');

const searchURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  
  const URL = searchURL.concat(breedName);
  request(URL, (error, response, body) => {
    if (error) {
      error = "invalid URL";
      callback(error,null);
      
    } else {

      const data = JSON.parse(body);
      const breedObject = data[0];
      if (breedObject) {
        const description = breedObject["description"];
        callback(null,description);
      } else {
        callback(null,null);
      }
    }
  });
};
module.exports = fetchBreedDescription;

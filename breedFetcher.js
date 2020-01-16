const request = require('request');
const URL = "https://api.thecatapi.com/v1/breeds/search?q=sib";
const inputBreedName = process.argv[2];


request(URL, (error, response, body) => {
  if (error) {
    error = "invalid URL";
    console.log('error:', error); // Print the error if one occurred
    return error;
  }
  
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body);
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  const object = data[0];
  const breedName = object["name"];
  // console.log(object);
  if (breedName === inputBreedName) {
    console.log(object['description']);
  } else if (object['name'] !== inputBreedName) {
    console.log(`This is API is for ${breedName}`);
  }
});

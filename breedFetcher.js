const request = require('request');
const inputBreedName = process.argv[2];
const searchURL = "https://api.thecatapi.com/v1/breeds/search?q=";
const URL = searchURL.concat(inputBreedName);


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
  // console.log(data[0]);
  const breedObject = data[0];
  if (breedObject) {
    const description = breedObject["description"];
    // console.log(description);
    console.log(breedObject);
    
    console.log(description);
  } else {
    console.log("Breed not found");
  }

 


  
  // console.log(data);
  // console.log(typeof data);

});
#!/usr/bin/node
const request = require('request');

const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    if (response.statusCode === 200) {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
    }
  }
});

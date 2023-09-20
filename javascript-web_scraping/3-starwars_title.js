#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

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

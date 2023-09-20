#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.error(error || 'Unexpected status code');
    return;
  }

  const filmsData = JSON.parse(body);
  let wedgeAntillesCount = 0;

  for (const film of filmsData.results) {
    for (const characterUrl of film.characters) {
      if (characterUrl.includes('/18/')) {
        wedgeAntillesCount++;
        break; // Sortir de la boucle interne dès qu'un personnage correspondant est trouvé
      }
    }
  }

  console.log(wedgeAntillesCount);
});

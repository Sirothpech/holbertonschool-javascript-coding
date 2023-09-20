#!/usr/bin/node
const fs = require('fs'); // Importer le module fs (file system)

const filePath = process.argv[2]; // Spécifier le chemin du fichier à lire

fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.error(error); // Afficher l'erreur si elle se produit
  } else {
    console.log(data); // Afficher le contenu du fichier lu
  }
});

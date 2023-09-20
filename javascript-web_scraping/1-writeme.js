#!/usr/bin/node
const fs = require('fs'); // Importer le module fs (file system)

const filePath = process.argv[2]; // Spécifier le chemin du fichier à lire
const text = process.argv[3]; // Spécifier le texte à écrire

fs.writeFile(filePath, text, 'utf-8', (error) => {
  if (error) {
    console.error(error); // Afficher l'erreur si elle se produit
  }
});

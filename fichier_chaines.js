const path = require('path');
const fs = require('fs');
const nomFichier = path.join(__dirname, "textes", "exemples.txt");

fs.readFile(nomFichier, 'utf-8', (err, contenu) => {
    if (err) {
        throw err;
    }
    contenu = contenu.replace("_nom", "John Smith");
    contenu = contenu.replace("_login", "smithj");
    console.log(contenu);
})

const automobiles = require('./liste_autos');
let rechercher = 'X5';
console.log(automobiles);
let trouve = automobiles.find(auto=>auto.modele === rechercher);
if (trouve) 
    console.log('voici l auto trouvée:', trouve);
if (trouve && trouve.annee === 2020) {
    console.log(`j'ai trouve la ${rechercher} de 2020`);
} else {
    console.log(`j'ai pas trouve la ${rechercher} de 2020`);
}
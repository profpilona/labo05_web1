const auto = { marque: 'Audi', modele: 'A4', annee: 2022, couleur: 'rouge'};
console.log('Mon auto:', auto);
console.log('Mon modele:', auto.modele);
console.log('Mon modele:', auto['modele']);
console.log('Mon marque:', auto.marque);
console.log('Mon marque:', auto['marque']);

const tabAutos = [
    { marque: 'Audi', modele: 'A4', annee: 2022, couleur: 'rouge'},
    { marque: 'BMW', modele: '330', annee: 2023, couleur: 'bleu'},
    { marque: 'Ferrari', modele: 'F8', annee: 2023, couleur: 'jaune'}
];
const trouve = tabAutos.find(auto=>auto.modele==='F8');
console.log('auto trouvee=', trouve);
console.log('couleur de la F8:', trouve.couleur);
console.log('annee de la F8', trouve.annee);

const tabUsagers = [
    {login: 'bob', nom: 'Bob Larue'},
    {login: 'paul'},
    {login: 'roger'},
    {login: 'fred'}
];
const cestlui = tabUsagers.find(usager=>usager.login==='bob');
console.log('usager trouve=', cestlui);
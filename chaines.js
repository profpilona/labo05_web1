//             0123456789
const texte = 'Salut les amis!';
const auto = { marque: 'Audi', modele: 'A4', annee: 2022};

// opérations sur les chaines de caractères
// console.log('longueur de la chaine:', texte.length);
// console.log('substring(1,3):', texte.substring(1,3));
// console.log('substring(6):', texte.substring(6));
// console.log('texte:', texte);
// console.log(auto);
// console.log('marque de mon auto:', auto.marque);
// console.log('texte.slice(1,3):', texte.slice(1,3));
// console.log('texte:', texte);
// console.log('texte.slice(6):', texte.slice(6));
// console.log('slice(-10,-4):', texte.slice(-10, -4));
// console.log('slice(-10):', texte.slice(-10));
// console.log('substr(1,3):', texte.substr(1,3));
// console.log('replace("Salut", "Bonjour"):', texte.replace("Salut", "Bonjour"));
// console.log('texte:', texte);
// console.log('replace("l", "ABC"):', texte.replace("l", "ABC"));
// console.log('replaceAll("l", "ABC"):', texte.replaceAll("l", "ABC"));
// console.log('replaceAll("s", "ABC"):', texte.replaceAll("s", "ABC"));
// console.log('replace(/s/, "ABC"):', texte.replace(/s/, "ABC"));
// console.log('replace(/s/i, "ABC"):', texte.replace(/s/i, "ABC"));
// console.log('replace(/s/ig, "ABC"):', texte.replace(/s/ig, "ABC"));
// console.log('replace(/s /ig, "ABC"):', texte.replace(/s /ig, "ABC"));
// console.log('replace(/s.a/, "ABC"):', texte.replace(/s.a/, "ABC"));
// console.log("lestamis une suite... ls5aqBZ".replace(/s.a/g, "XYZ"));

// console.log('texte:', texte);
// console.log('toUpperCase()', texte.toUpperCase());
// console.log('texte:', texte);
// console.log('indexOf("amis")', texte.indexOf("amis"));
// console.log('indexOf("amis")', texte.indexOf("amies"));
// console.log('includes("amis")', texte.includes("amis"));
// console.log('includes("amies")', texte.includes("amies"));
// console.log('indexOf("a")', texte.indexOf("a"));
// let premier = texte.indexOf("a");
// console.log('indexOf("a", premier+1):', texte.indexOf("a", premier+1));
// console.log('lastIndexOf("a")', texte.lastIndexOf("a"));
// console.log('startsWith("Le")', texte.startsWith("Le"));
// if (texte.startsWith("Salut")) {
//     console.log("La chaine commence par Salut");
// }
// console.log('endsWith("!")', texte.endsWith("!"));
// console.log('padStart(20, "*")', texte.padStart(20, "*"));
// let valeur = 2.99;
// console.log(valeur.toFixed(2).padStart(10, '*'));

const prenoms = "Bob, Fred, Roger, Paul";
console.log("prenoms: ", prenoms);
let tableauPrenoms = prenoms.split(", ");
console.log("tabelauPrenoms:", tableauPrenoms);
for (let indice in tableauPrenoms) {
    console.log('indice vaut:', indice, 'valeur est:', tableauPrenoms[indice]);
}
tableauPrenoms.forEach((nom, indice)=>console.log( `indice vaut: ${indice} valeur est: ${nom}`));
const pommes = ["Granny Smith", "Lobo", "Fuji", "Spartan"];
const chaine = pommes.join("/");
const chaine2 = pommes.toString();
console.log(pommes);
console.log(chaine);
console.log(chaine2);
pommes.push("MC intosh");
console.log(pommes);
console.log(chaine);
// regardez pommes.pop()   pommes.shift()   et pommes.unshift()
console.log(pommes[2]);
pommes.splice(1, 0, "rouge", "truc");
console.log(pommes);
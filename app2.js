const http = require('http');
const path = require('path');
const fs = require('fs');
const url= require('url');
const PORT = 8000;

http.createServer((requete, reponse)=>{
    // afficher la page Web demandée???
    if (requete.url.substring(0, 17) === '/traite_form.html') {
        traiterFormulaire(requete, reponse);
    } else {
        if (requete.url === '/' || requete.url === '/index.html') {
            let nomFichier = path.join(__dirname, 'pagesWeb', "index.html");
            fournirPagesWeb(nomFichier, reponse);
        } else {
            let nomFichier = path.join(__dirname, 'pagesWeb', requete.url);
            fournirPagesWeb(nomFichier, reponse);
        }
        console.log(requete.url);
    }
}).listen(PORT, ()=>console.log('Le service Web pour app2 est démarré sur le port=', PORT));

function traiterFormulaire(requete, reponse) {
    let params;
    if (requete.method === 'GET' ) {
        params = new url.URLSearchParams(requete.url.substring(18));
        traiteRequete(requete, reponse, params);
    } else {
        let postDATA = "";
        requete.on('data', (donnee)=>{ postDATA += donnee});
        requete.on('end', ()=>{
            params = new url.URLSearchParams(postDATA);
            traiteRequete(requete, reponse, params);
        });
    }
}

function traiteRequete(requete, reponse, params) {
    const login = params.get('login');
    const pwd = params.get('pwd');
    reponse.write('ton login est:'+login+ ' pwd='+pwd);
    reponse.end();
}

function fournirPagesWeb(fileName, reponse) {
    console.log('La page Web a afficher est:', fileName);
    let typeFichier = path.extname(fileName);
    let typeContenu = 'text/html';
    switch(typeFichier) {
        case '.js': 
            typeContenu = 'text/javascript';
            break;
        case '.css':
            typeContenu = 'text/css';
            break;
        case '.png':
            typeContenu = 'image/png';
            break;
        case '.jpg':
            typeContenu = 'image/jpg';
            break;
        case '.gif':
            typeContenu = 'image/gif';
            break;
        case '.json':
            typeContenu = 'application/json';
            break;
    }
    fs.readFile( fileName, (err, contenu)=>{
        if (err) {
            if (err.code === 'ENOENT') { // fichier inexistant
                reponse.writeHead(404, { 'Content-Type': 'text/html'});
                reponse.write('<h1>Page demand&eacute;e introuvable</h1>\n');
                reponse.write(`<h2>${fileName}</h2>`);
                reponse.end();        
            } else {
                reponse.writeHead(500, { 'Content-Type': 'text/html'});
                reponse.write('<h1>Erreur interne du serveur</h1>\n');
                reponse.write(`<h2>Code: ${err.code}</h2>`);
                reponse.end();                  
            }
        } else {
            reponse.writeHead(200, {'Content-Type': typeContenu});
            reponse.write(contenu);
            reponse.end();
        }
    });
}
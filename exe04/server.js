const http = require('http')

const routes = [ // Array comprenant les différentes routes menant vers les différents template (passer par un fichier route.js sert à afficher une page dynamique)
    {url : '/', controller : 'home'}, // le controller redirige vers le template
    {url : '/about', controller : 'about'},
    {url : '/friends', controller : 'friends'}
]

const router = (req, res) => { // le lien entre la page et le serveur
    let route = routes.findIndex(item => item.url === req.url) // vérifie si l'url amène vers une page existante
    if (route !== -1) { // indique la route de la page demandée et passe au fichier JS l'exécution de req et le traitement de res
        require (`./routes/${routes[route].controller}`)(req, res)  // ex : /routes/home.html
    } else {
        require ('./routes/error')(req, res)
    }
}

http.createServer(router).listen(8000, () => { // Création d'un serveur qui lance directement la fonction router
    console.log('Server running and listening port 8000')
})

// const http = require('http')
// const fs = require('fs')

// http.createServer((req, res) => { // crée un serveur et passe en paramètre la requête et le résultat
//     console.log('We have received a request!!!')
//     fs.readFile('template/index.html', {encoding : 'utf-8'}, (err, data) => {
//         res.end(data)
//     })
//     // res.end('Hello world') // termine la requête
// }).listen(8000, () => {
//     console.log('Server running and listening port 8000')
// })
// Fichier d'initilisation du serveur

const [major, minor] = process.versions.node.split('.').map(parseFloat) // crée un array avec des valeurs après chaque . => 7.6.2 => [7,6,2]
if (major < 7 || major === 7 && minor <= 5) {
    console.log('The node version of the server is too low for modern node programming')
    throw('The node version of the server is too low for modern node programming')
}

// Start our app if everything is allrigt and initialized

const app = require('./app') // appelle le fichier externe app dans le dossier courant
app.set('port', process.env.PORT || 8000) // définit une variable port dans l'objet app et va chercher dans l'objet process le port ou si tu trouve pas => utilise le port 8000
const server = app.listen(app.get('port'), () => { // définir un serveur et écoute le port 
    console.log(`express running - PORT ${server.address().port}`) // le port de la méthode address de l'objet server
})
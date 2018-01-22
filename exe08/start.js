// Fichier d'initilisation du serveur

const [major, minor] = process.versions.node.split('.').map(parseFloat) // crée un array avec des valeurs après chaque . => 7.6.2 => [7,6,2]
if (major < 7 || major === 7 && minor <= 5) {
    console.log('The node version of the server is too low for modern node programming')
    throw('The node version of the server is too low for modern node programming')
}

// Initialize env variables
require('dotenv').config({path:'.variables.env'})

// Launch Mongo Connection
// Mongoose est une singleton : permet de créer une instance est stockée dans une variable statique et il ne faut pas la répéter, il renvoie l'existant

const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Chaque fois qu'il y a une promesse, utilise les promesses de la version de Node
mongoose.connect(process.env.DB_HOST, (err) => {
    if(err) console.log('WTF there is a problem with the database connection')
    console.log('Mongo is now connected to our system please request away :)')
})

// Import all models
require(`${process.cwd()}/models/Magasin`)

// Start our app if everything is allrigt and initialized

const app = require('./app') // appelle le fichier externe app dans le dossier courant
app.set('port', process.env.PORT || 8000) // définit une variable port dans l'objet app et va chercher dans l'objet process le port ou si tu trouve pas => utilise le port 8000
const server = app.listen(app.get('port'), () => { // définir un serveur et écoute le port 
    console.log(`express running - PORT ${server.address().port}`) // le port de la méthode address de l'objet server
})
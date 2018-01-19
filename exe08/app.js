const express = require('express')
const app = express()
const routes = require(`${process.cwd()}/routes`)
const hbs = require('express-hbs')

// View engine rendering setup
app.engine('hbs', hbs.express4({ // initialisation du moteur
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout : `${__dirname}/views/layouts/main.hbs`
}))
app.set('view engine', 'hbs') // lancer le moteur
app.set('views', `${__dirname}/views`) // dossier dans lequel je vais retrouver mes vues
// Setup static folder for static rendering on my server side
app.use(express.static(`${__dirname}/public)`))
app.use('/', routes) // Quand tu as une url, utilise le fichier route --> use : middleware : bout de code

module.exports = app // export de l'objet app
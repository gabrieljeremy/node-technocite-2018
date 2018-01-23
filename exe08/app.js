const express = require('express')
const app = express()
const routes = require(`${process.cwd()}/routes`)
const hbs = require('express-hbs')
const bodyParser = require('body-parser')
const helpers = require('./helpers')
const expressValidator = require('express-validator')
// View engine rendering setup
app.engine('hbs', hbs.express4({ // initialisation du moteur
    partialsDir : [`${__dirname}/views/partials`],
    defaultLayout : `${__dirname}/views/layouts/main.hbs`
}))
app.set('view engine', 'hbs') // lancer le moteur
app.set('views', `${__dirname}/views`) // dossier dans lequel je vais retrouver mes vues
helpers.registerHelpers(hbs)
// Setup static folder for static rendering on my server side
app.use(express.static(`${__dirname}/public`)) 
// Setup express to manage the raw requests and turn them intoo usable properties of req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Après avoir parsé l'url : on utilise l'express validator
app.use(expressValidator())

app.use('/', routes) // Quand tu as une url, utilise le fichier route --> use : middleware : bout de code

module.exports = app // export de l'objet app
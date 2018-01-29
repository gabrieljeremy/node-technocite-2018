const express = require('express')
const app = express()
const routes = require(`${process.cwd()}/routes`)
const hbs = require('express-hbs')
const bodyParser = require('body-parser')
const helpers = require('./helpers')
const expressValidator = require('express-validator') // permet de créer un validator pour l'utiliser dans express
const cookieParser = require('cookie-parser')
const session = require('express-session')
const sessionStore = new session.MemoryStore // initialise la session en mémoire
const passport = require('passport') // et npm install passport-local qui va le require plus tard
const mongoose = require ('mongoose')
const User = mongoose.model('User')

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

// Cookie management
app.use(cookieParser('secret'))

// Session management
app.use(session({
    cookie:{maxAge:60000},
    store: sessionStore,
    saveUninitialized:true,
    resave:true,
    secret:'secret'
}))

// Init passport
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(passport.initialize())
app.use(passport.session())

// Validator
app.use((req, res, next) => {
    res.locals.user = req.user // locals : permet d'avoir un accès global dans mes vues
    res.locals.authenticated = req.isAuthenticated()
    next()
})

app.use('/', routes) // Quand tu as une url, utilise le fichier route --> use : middleware : bout de code

module.exports = app // export de l'objet app
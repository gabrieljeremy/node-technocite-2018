const express = require('express')
const router = express.Router() // crée un objet router qui va chercher la fonctionnalité Router d'express
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)
const usersController = require(`${process.cwd()}/controllers/usersController`)
// router.get('/', (req, res) => {
//     res.send('Hello home')
// })

router.get('/', pagesController.home)
router.get('/magasins/add', magasinsController.addMagasin)
router.get('/magasins/:slug', magasinsController.getMagasinBySlug) // Express convertit l'url avec le paramètre :slug et le convertit avec la donnée
router.get('/login', usersController.loginForm)
router.get('/register', usersController.registerForm)
router.post('/magasins/add', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.createMagasin)
router.post('/magasins/add/:id', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.updateMagasin)
router.get('/magasins/:id/edit', magasinsController.editMagasin)
router.get('/about', pagesController.about)

router.post('/register', usersController.validateRegister, usersController.register)

module.exports = router
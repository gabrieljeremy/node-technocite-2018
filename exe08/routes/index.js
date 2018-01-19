const express = require('express')
const router = express.Router() // crée un objet router qui va chercher la fonctionnalité Router d'express
const pagesController = require(`${process.cwd()}/controllers/pagesController`)

// router.get('/', (req, res) => {
//     res.send('Hello home')
// })

router.get('/', pagesController.home)
router.get('/about', pagesController.about)

module.exports = router
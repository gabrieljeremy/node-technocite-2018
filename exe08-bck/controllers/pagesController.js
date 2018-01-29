const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')

exports.home = async (req, res) => {
    const magasins = await Magasin.find() // si une méthode prend une promesse, il peut prendre un await et faut avoir une fonction asynch => exécute la promesse et stocke les valeurs dans la variable
    // console.log(magasins)
    res.render('home', {title : 'Ma homepage', magasins : magasins})
}

exports.about = (req, res) => {
    res.render('about', {title : 'About me', test : 'Jeremy Gabriel'})
}
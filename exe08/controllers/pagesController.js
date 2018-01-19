exports.home = (req, res) => {
    res.render('home', {title : 'Ma homepage', test : 'Ceci est un texte'})
}

exports.about = (req, res) => {
    res.render('about', {title : 'About me', test : 'Jeremy Gabriel'})
}
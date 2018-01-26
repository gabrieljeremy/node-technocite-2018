const passport = require ('passport')

exports.login = passport.authenticate('local', { // stratégie locale
    failureRedirect : '/login',
    successRedirect : '/'
})

exports.isLoggedIn = (req, res, next) => { // middleware pour voir si connecté ou non
    if (req.isAuthenticated()) {
        next()
        return
    }
    res.redirect('/login')
}

exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}
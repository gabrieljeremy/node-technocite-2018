const mongoose = require('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')

exports.loginForm = (req, res, next) => {
    res.render('login')
}
exports.registerForm = (req, res, next) => {
    res.render('register')
}
exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name') // éviter de placer du code SQL dans le champ pour exécuter la requête
    req.checkBody('name', 'Vous devez entrer un nom').notEmpty()
    req.checkBody('email', 'Veuillez entrer un email').isEmail()
    req.checkBody('password', 'Le password est vide et cela ne se peut pas').notEmpty()
    req.checkBody('password-confirm', 'La confirmation n\'est pas correcte').notEmpty()
    req.checkBody('password-confirm', 'La confirmation n\'est pas identique').equals(req.body.password)
    const errors = req.validationErrors()
    if (errors) {
        res.render('register', {'user' : req.body, 'errors':errors})
    } else {
        next()
    }
}

exports.register = async (req, res, next) => {
    const user = await new User ({email : req.body.email, name : req.body.name})
    const register = promisify(User.register, User)
    try {
        await register(user, req.body.password)
    }catch(e) {
        console.log(e)
    }
    next()
}
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const validator = require('validator')

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique:true,
        lowercase:true,
        trim:true,
        validate: [validator.isEmail, 'Adresse email invalide'],
        required:'Introduisez une adresse mail valide svp !!!'
    },
    name: {
        type: String,
        required:true,
        trim:true
    }
})

schema.plugin(passportLocalMongoose, {usernameField : 'email'})

module.exports = mongoose.model('User', schema)
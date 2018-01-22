const mongoose = require('mongoose')
const schema = new mongoose.Schema({ // initialize a new instance
    name : {
        type: String,
        required:'Thanks to introduce a name'
    },
    slug: {
        type:String,
        trim:true // enlever les espaces blancs
    },
    description: {
        type:String
    },
    photo: {
        type: String
    }
})

module.exports = mongoose.model('Magasin', schema)

const mongoose = require('mongoose')

const schema = new mongoose.Schema({ // initialize a new instance
    name : {
        type: String,
        required:'Thanks to introduce a product'
    },
    description: {
        type:String
    },
    price: {
        type:String
    }
})

module.exports = mongoose.model('Product', schema)

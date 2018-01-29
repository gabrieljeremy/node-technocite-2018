const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.addProduct = async (req, res) => {
    res.render('add_product', {"product" : {}})
}
exports.createProduct = async (req, res, next) => {
    const product = await new Product(req.body).save()
    res.redirect(`/addProduct`)
}
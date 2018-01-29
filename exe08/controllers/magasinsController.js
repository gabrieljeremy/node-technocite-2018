const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')
const Product = mongoose.model('Product')
const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')

exports.addMagasin = (req, res) => {
    res.render('magasin_edit', {"magasin" : {}})
}

exports.createMagasin = async (req, res) => {
    const magasin = await new Magasin(req.body).save()
    res.redirect('/')
}

exports.getMagasinBySlug = async (req, res) => {
    const magasin = await Magasin.findOne({slug : req.params.slug})
    res.render('magasin_details', {"magasin":magasin})
}

exports.editMagasin = async (req, res) => {
    const magasin = await Magasin.findOne({_id:req.params.id})
    if (!magasin) return next()
    res.render('magasin_edit', {"magasin":magasin})
}

exports.updateMagasin = async (req, res) => {
    const magasin = await Magasin.findByIdAndUpdate({_id : req.params.id}, req.body, { new:true }).exec() // exec() : exécute la promesse sans attendre la réponse de Mongo et new:true : renvoie l'objet modifié au lieu de l'original (renvoie la valeur)
    res.redirect(`/magasins/${magasin.slug}`)
}
exports.deleteMagasin = async (req, res) => {
    const magasin = await Magasin.findByIdAndRemove({_id : req.params.id}, req.body)
    res.redirect('/')
}

const multerOptions = {
    storage : multer.memoryStorage(), // la stocke en mémoire
    fileFilter(req, file, next) {
        const isPhoto = file.mimetype.startsWith('image/')
        if (isPhoto) {
            next(null, true) // on continue
        } else {
            next({message: 'this filetype is not allowed'})
        }
    }
}

exports.upload = multer(multerOptions).single('photo')

exports.resize = async (req,res, next) => {
    if(!req.file) {
        next()
        return
    }
    const extension = req.file.mimetype.split('/')[1] // stocke le type d'image
    req.body.photo = `${uuid.v4()}.${extension}` // crée un code unique e
    const photo = await jimp.read(req.file.buffer) // lit les données hexadécimales (données brut) et stocke la dans une variable
    await photo.resize(800, jimp.AUTO) // retaille à 800px de large
    await photo.write(`${process.cwd()}/public/uploads/${req.body.photo}`) // écrire la photo dans le fichier suivant
    next()
}
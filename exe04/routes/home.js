const fs = require ('fs')
module.exports = (req, res) => { // Va chercher le bon template demandé
    fs.readFile(`${process.cwd()}/template/index.html`, {encoding: 'utf-8'}, (err, data) => {
        res.end(data)
    })
}
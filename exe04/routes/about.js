const fs = require ('fs') // file system
module.exports = (req, res) => { // on exporte cette méthode
    fs.readFile(`${process.cwd()}/template/about.html`, {encoding: 'utf-8'}, (err, data) => { // cwd = command working directory
        res.end(data)
    })
}
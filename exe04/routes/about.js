const fs = require ('fs')
module.exports = (req, res) => {
    fs.readFile(`${process.cwd()}/template/about.html`, {encoding: 'utf-8'}, (err, data) => {
        res.end(data)
    })
}
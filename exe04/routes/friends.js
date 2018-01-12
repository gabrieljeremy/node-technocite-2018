const fs = require ('fs')
module.exports = (req, res) => { 
    fs.readFile(`${process.cwd()}/public/friends.json`, {encoding: 'utf-8'}, (err, json) => {
        // console.log(json)
        if(err) {
            res.writeHead(500, {'Content-type' : 'text/html'}) // erreur 5000 : erreur serveur
            res.end('The server has a problem please try later')
        }
        fs.readFile(`${process.cwd()}/template/friends.html`, {encoding: 'utf-8'}, (err, data) => {
            if(err) {
                res.writeHead(404, {'Content-type' : 'text/html'})
                res.end('File not found')
            } else {
                res.end(generateHtml(data, json))
            }
            res.end(generateHtml(data, json))
        })
    })
}

const generateHtml = (tpl,json) => {
    // let values = JSON.parse(json) // objet js qui va parcourir le fichier .json et le stocker dans un array
    // console.log(values)
    // let tempArr = values.map(item => item.name)
    // console.log(tempArr)
    // let tempStr = tempArr.join('</li><li>')
    // console.log(tempStr)
    // let htmlStr = tpl.replace('%friends%', tempStr)
    // console.log(htmlStr)
    // return htmlStr
    return tpl.replace('%friends%', JSON.parse(json).map(item => item.name).join('</li><li>'))
}
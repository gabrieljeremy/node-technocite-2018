const fs = require ('fs')
const promisify = require('es6-promisify')

const read = promisify(fs.readFile)
const write = promisify(fs.writeFile)
module.exports = (req, res) => {
    if (req.method === 'GET') {
        console.log(req.method)
        let templatePromise = read(`${process.cwd()}/models/books.json`)
        templatePromise.then(json => {
            res.setHeader('Content-type', 'application/json')
            res.end(json)
        }).catch(err => {
            console.log(err)
        })
    } else if (req.method === 'POST') {
        console.log(req.method)
        let formData = ''
        req.on('data', ((data) => {
            formData += data
        }))
        req.on('end', () => {
            // console.log('write to file', formData)
            read(`${process.cwd()}/models/books.json`)
                .then((data) => {
                    let tempArr = JSON
                    console.log(JSON.parse(data).push(JSON.parse(formData)))
                })
        })
    }
}
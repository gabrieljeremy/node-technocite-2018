const promisify = require('es6-promisify')
const fs = require ('fs')

// Crée un promesse avec la fonction fs.readFile
const read = promisify(fs.readFile)

read(`${process.cwd()}/datas/file1.txt`, {encoding : 'utf-8'})
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
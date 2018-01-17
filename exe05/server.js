const fs = require('fs')
// fs.readFile(`${process.cwd()}/datas/file1.txt`, (err, data) => {
//     let allData = ''
//     allData += data
//     fs.readFile(`${process.cwd()}/datas/file2.txt`, (err, data) => {
//         allData += data
//         console.log(allData)
//     })
// })

// Une promesse englobe une callback : je vais exécuter ça et une fois que c'est fait alors exécute ceci avec .then

const readFile = (file) => {
    // variable qui instancie l'objet avec une promise
    return new Promise((resolve, reject) => { // si bien passé : resolve = then() et si pas : reject = catch
        fs.readFile(file, {encoding : 'utf-8'}, (err, data) => {
            if(err) reject(err)
            resolve (data)
        })
    })
    // return filePromise
}
// readFile(`${process.cwd()}/datas/file1.txt`)
//     .then(data => {
//         console.log(data)
//         readFile(`${process.cwd()}/datas/file2.txt`)
//             .then(data => {
//                 console.log(data)
//             }).catch(err => { // les erreurs s'enchaînent
//                 console.log(err)
//             })
//     })

// let promise1 = readFile(`${process.cwd()}/datas/file1.txt`)
// let promise2 = readFile(`${process.cwd()}/datas/file2.txt`)
// let promiseArr = [promise1, promise2]

// Promise.all(promiseArr).then(results => {
//     console.log(results)
// }).catch(err => {
//     console.log(err)
// })

Promise.all([readFile(`${process.cwd()}/datas/file1.txt`), readFile(`${process.cwd()}/datas/file2.txt`)]) // Exécuter les deux promesses en parallèle
    .then(results => {
        console.log(results[1]) // interprète les \n sinon met le texte brut => faire un .map
    }).catch(err => {
        console.log(err)
    })



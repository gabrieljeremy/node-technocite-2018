// const http = require('http')
// const fs = require('fs')

// http.get('http://www.pass.be', res => {
//     res.setEncoding('utf-8')
//     let body = ''
//     res.on('data', donnee => {
//         body += donnee
//         // console.log('------------------') // reçoit le résultats en plusieurs fois selon la quantité de données à aspirer (plusieurs paquets)
//     })
//     res.on('end', () => {
//         console.log('end')
//         fs.writeFile('index.html', body, (err) => {
//             if (err) console.log(err)
//             console.log('file generated')
//         })
//     })
// })

// Exercice : aspirer 3 pages différentes et les mettre dans la page index.html à la suite de l'autre

// Version simple

// const http = require('http')
// const fs = require('fs')

// const urls = ['http://www.pass.be', 'http://triptyk.eu', 'http://www.triptyk.eu/fr/about']

// let body = ''

// urls.map(url => {
//     http.get(url, res => {
//         res.setEncoding('utf-8')
//         res.on('data', donnee => {
//             body += donnee
//         })
//         res.on('end', () => {
//             console.log('end')
//             fs.writeFile('index.html', body, (err) => {
//                 if (err) console.log(err)
//                 console.log('file generated')
//             })
//         })
//     })
// })

const http = require('http')
const fs = require('fs')
const values = []
const sitesToHack = ['http://www.pass.be', 'http://triptyk.eu', 'http://www.triptyk.eu/fr/about']
let sitesLoaded = 0
const getPagesFromSiteAndStock = (url) => {
    http.get(url, res => {
        let body = ''
        res.on('data', data => {
            body += data
        })
        res.on('end', () => {
            console.log(`end of loading ${url}`)
            values.push(body)
            checkFinishedProcess()
        })
    })
}
const checkFinishedProcess = () => {
    sitesLoaded++
    if (sitesLoaded === sitesToHack.length) {
        console.log('all pages are saved in the file')
        const tmpStr = values.reduce((prev, current) => {
            return `${prev}\n${current}`
        })
        fs.writeFile('results.html', tmpStr, (err) => {
            if (err) console.log (err)
            console.log('all sites are saved')
        })
    }
}
const init = () => {
    sitesToHack.map(item => getPagesFromSiteAndStock(item))
}
init()
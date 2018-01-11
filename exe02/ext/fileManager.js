const fs = require('fs') // Appel du module fs
let values = [] // Initialisation du tableau qui va récupérer les différents noms

module.exports = {
    init: (file, action, value) => { // Initialise la lecture du fichier
        fs.readFile(file, (err, data) => {
            values = (data.toString().split('\n')) // Trasnforme les données du tableau en string et le stock dans le tableau
            if (action === 'add') {
                add(value, file)
            } else { 
                remove(value, file) 
            }
        })
    }
}

const add = (value, file) => {
    values.push(value)
    save(file)
}
const remove = (value, file) => {
    //
}
const save = (file) => {
    let tempStr = values.reduce((prev, current) => { 
        return `${prev}\n${current}` // Ajoute les noms précédents et ajoute le nouveau dans le tableau en passant à la ligne
    })
    fs.writeFile(file, tempStr, (err) => { // Ajoute les données du tableau dans le fichier
        if (err) console.log(err)
        console.log('file saved')
    })
}
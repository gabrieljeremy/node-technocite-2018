const fs = require('fs') // Appel du module fs
let values = [] // Initialisation de l'array qui va récupérer les différents noms

// let newline = '\n'
// if (newline) {
//     values = (data.toString().split('\n'))
// } else {
//     values = (data.toString().split('\r'))
// }
module.exports = {
    init: (file, action, value) => { // Passe une valeur à l'objet une fonction qui initialise la lecture du fichier
        fs.readFile(file, (err, data) => { // \r : windows et \n pour linux
            values = (data.toString().split('\r')) // Trasnforme les données du tableau en string et le stock dans le tableau (les () sont importantes (cast) pour que ça soit un tableau) --- le .split convertit la string dans un array et chaque fois qu'il y a un \n on en fait un élément de l'array
            if (action === 'add') {
                add(value, file)
            } else { 
                remove(value, file) 
            }
        })
    }
}

const add = (value, file) => { // Fonction qui va ajouter des noms
    if (!checkValueInList(value)) {
        values.push(value)
    } else {
        console.log('this element is allready in our actual file')
    }
    save(file)
}
const remove = (value, file) => { // Fonction qui va retirer des noms
    // let current = values.indexOf(value)
    // console.log(values)
    // values.splice(current, 1)
    // save(file)
    if (checkValueInList(value)) {
        values.splice(values.findIndex(item => item === value), 1)
    } else {
        console.log('the value doesn\'t exist in our actual file')
    }
    save(file)
}

const checkValueInList = (value) => {
    return values.filter(item => item === value).length > 0
}
const save = (file) => {
    console.log(values)
    let tempStr = values.reduce((prev, current) => { 
        return `${prev}\r${current}` // Ajoute les noms précédents et ajoute le nouveau dans le tableau en passant à la ligne
    })
    fs.writeFile(file, tempStr, (err) => { // Ajoute les données du tableau dans le fichier
        if (err) console.log(err)
        console.log('file saved')
    })
}
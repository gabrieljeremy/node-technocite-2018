const [action, value] = [process.argv[2], process.argv[3]] // Mise de la 3ème et de la 4ème valeur du terminal dans une variable
const possibleActions = ['add', 'remove'] // Stock des actions possibles dans une constante qui peut changer
const fileMger = require('./ext/fileManager') // On importe un fichier (. => dans ce dossier)

const checkActions = (action) => { // Fonction qui filtre les actions pour voir si l'action est une action valide
    // let tempArr = possibleActions.filter((item) => {
    //     item === action
    // })
    // let l = tempArr.length
    // let returnValue = false
    // if (l > 0) {
    //     returnValue = true
    // }
    // return returnValue
    return possibleActions.filter(item => item === action).length > 0 // l'action doit exister dans le tableau pour être check
}
// function checkValues(value) {
//     let returnValue = false
//     if (value !== null || value !== undefined || value !== 0 || value !== NaN) {
//         returnValue = true
//     }
//     return returnValue
// }
const checkValues = (value) => (value) ? true : false // S'il y a une valeur encodée, checkValues = true sinon false

const init = () => { // Fonction qui initialise l'application
    if (!checkActions(action)) { // Si l'action n'est pas reprise dans les actions possibles
        console.log(`Error : the possible actions are :
        -add
        -remove`)
    } else if (!checkValues(value)) { // Sinon s'il n'y a pas de valeur encodée
        console.log('Error : You need to give value for insertion !!!')
    } else {
        fileMger.init('liste.txt',action, value) // On passe le fichier, l'action et la valeur
    }
}
init() // On lance la fonction


// fs.readFile(`${process.cwd()}/liste.txt`, {encoding :'utf8'}, (err, data) => {
//     if (err) throw err // si tu rencontres une erreur, tu lances l'erreur et stoppe le serveur ---- ou console.log(err)
//     console.log(data)
// })


// console.log(__dirname) // donne moi le répertoire dans lequel se trouve ce fichier ci
// console.log(process.cwd()) // donne moi le répertoire où Node s'exécute actuellement


console.log(0.1+0.2) // erreur de la virgule flotante : faut l'arrondir

test() // fonctionne car le javascript est lu une 1ere fois et remonte toutes les fonctions
var a = 3
function test() {
    var a = 5 // n'existe que dans cette fonction
}
console.log(a)

const a = 3
a = 5 // on ne peut pas modifier la constante
const arr = []
arr.push('test') // on peut par contre modifier un tableau
arr[1] = 'test2'

let a = 4
{ // blocking scope : englobe la variable a dans un scope spécifique (utilisable que dans les accolades)
    let a = 3
}
console.log(a)

(function(msg) { // fonction anonyme basée sur une closure => ('a') execute la fonction elle-même et passe le a en paramètre de la fonction
    console.log(msg)
})('a')

var obj = {
    name : 'gilles',
    job : 'student',
    toString : function() {
        return `name is ${this.name} job is ${this.job}` // magic string
    }
}
console.log(obj.toString())

const arr = [a,b] = ['gilles', 'bertrand'] // déclarer plusieurs variables dans un array
console.log(b)
console.log(a)
console.log(arr)

// EXERCICES

const numbers = [1,2,3,4,5,6,7,8]

// Doubler les nombres compris dans ce tableau

function dblNumbers(arr) {
    
    // const arrDbl = []
    // for (let i = 0, length = arr.length; i<length; i++) { // length est calculé qu'une seule fois à cause qu'on l'initialise dans la boucle for
    //     arrDbl.push(arr[i]*2)
    // }
    // return arrDbl

    // const arrDbl = []
    // arr.map(number => arrDbl.push(number*2))
    // return arrDbl

    // return arr.map(function(item) {
    //     return item*2
    // })

    return arr.map(item => item*2) // le return n'est pas obligatorie

}
console.log(dblNumbers(numbers))

// Additionner tous les nombres
console.log(numbers.reduce((prev, current) => { // prev = somme des nombres précédents et current = nombre à additionner ensuite
    return prev + current
}, 0)) // la première valeur à utiliser

// Construire un nouvel array avec des strings
console.log(numbers.reduce((prev, current) => { // prev = somme des nombres précédents et current = nombre à additionner ensuite
    prev.push(current.toString() + 'tttt')
    return prev
}, [])) // la première valeur à utiliser

// Afficher les numéros pairs
console.log(numbers.filter(item => item % 2 === 0))

// Afficher les nombres impairs
console.log(numbers.filter(item => item % 2 !== 0))

// ********************

// .reduce manipule un array et me renvoie ce que je veux
// .map boucle dans un array et renvoie un nouvel array
// .filter cherche dans l'array et renvoie un nouvel array sous une condition

// ********************

// Cloner un array

var arr1 = ['t', 'a', 'b']
var arr2 = []
for (var i = 0, l = arr1.length; i < l; i++) {
    arr2.push(arr1[i])
}
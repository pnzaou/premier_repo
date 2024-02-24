//FONCTION SUR LES CHAINES



//Inverser une chaîne

function inverse(c){
    let tb = c.split('')
    let rv = tb.reverse()
    return `L'inverse de ${c} est : ${rv.join('')}`
}

// console.log(inverse('Bonjour'))
// console.log(inverse('Moi'))
// console.log(inverse('Demain'))

//Compter les caractères

let caractères = (c) => {
    return `"${c}" contien ${c.length} caractères`
}

// console.log(caractères('chef'))
// console.log(caractères('allow'))
// console.log(caractères('e'))

//Mettre les mots en majuscule

let maj = function(c){
    var t = ''
    var spc
    for (let i = 0; i < c.length; i++){
        if(i === 0){
            t+= c[i].toUpperCase()
        }
        else if(c[i] === ' '){
            spc = i
            t+= c[i]
        }
        else if(i === (spc+1)){
            t+= c[i].toUpperCase()
        }
        else{
            t+= c[i]
        }
    }
    return `Avant : ${c} || apres : ${t}`
}

// console.log(maj("bonjour je m'appelle emmanuel et vous ?"))
// console.log(maj("je vais au marche"))
// console.log(maj("bonne nuit a tous"))
 


//FONCTION SUR LES TABLEAUX



//Rechercher le maximum et le minimum

function minMax(t){
    var min = 0
    var max = 0
    for(i in t){
        if (i == 0) {
            min = t[i]
            max = t[i]
        }
        else if(t[i] > max){
            max =t[i]
        }
        else if(t[i] < min){
            min = t[i]
        }
    }
    return `La plus petite valeur est: ${min}. La plus grande valeur est: ${max}`
}

t1 = [15, 35, 66, 3, 40, 27, 92, 2, 76]
t2 = [100, 43, 300, 150, 900, 26, 230, 120]

// console.log(minMax(t1))
// console.log(minMax(t2))


//Somme du tableau

let somme = (t) => {
    var sum = 0
    for(i of t){
        sum += i
    }

    return `La somme des éléments du tableau [${t}] est de : ${sum}`
}

// console.log(somme(t1))
// console.log(somme(t2))




//Fonctions mathématiques 


//Factorielle

function factoriel(x){
    fact = 1
    for(let i = x; i >= 1; i--){
        fact *= i
    }
    return `La factorielle de ${x} est: ${fact}`
}

// console.log(factoriel(5))
// console.log(factoriel(6))
// console.log(factoriel(10))
// console.log(factoriel(15))


//Vérification des nombres premiers

let nb_pr = (x) => {
    var cpt = 0
    for(let i = 1; i <= x; i++){
        if(x%i === 0){
            cpt ++
        }
    }
    return (cpt === 2)? `${x} est un nombre premier` : `${x} n'est pas un nombre premier`
}

// console.log(nb_pr(5))
// console.log(nb_pr(29))
// console.log(nb_pr(15))
// console.log(nb_pr(97))
// console.log(nb_pr(91))


//Séquence de Fibonacci 

let Fibonacci = function(x) {
    var sequence = [0, 1];

    if (x === 0) {
        return [0];
    } else if (x === 1) {
        return [0, 1];
    }

    for (var i = 2; i < x; i++) {
        var nextFib = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextFib);
    }

    return sequence;
} 

var fibSequence = Fibonacci(11);
console.log("Séquence de Fibonacci jusqu'à 11 termes:", fibSequence);


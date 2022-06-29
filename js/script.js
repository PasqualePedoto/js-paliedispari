// # ASSEGNAZIONE

// $ Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// $ Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// $ PALIDROMA - SVOLGIMENTO

// * Creiamo tutte le funzioni

// @ Creiamo una funzione in grado di chiedere all'utente di inserire una parola

// function logSentence() {
//     let validWord;
//     let result;

//     do {
//         result = prompt('Inserisci una parola: ', 'parola');
//         validWord = isNaN(result) ? false : true;
//     } while (validWord)

//     return result;
// }

// @ Creiamo una funzione in grado di verificare che la parola passata come parametro è 
// @ palindroma

// function isPalindroma(word) {
//     let isPalindroma;
//     let reverseWord = '';

//     for (let i = word.length - 1; i >= 0; i--) {
//         reverseWord += word[i];
//     }

//     console.log(reverseWord);
//     if (reverseWord === word) isPalindroma = true;
//     else isPalindroma = false;

//     return isPalindroma;
// }

// * Realizziamo l'algoritmo del primo esercizio servendoci delle funzioni precedentemente create

// const word = logSentence();
// const controll = isPalindroma(word);
// let sentence = `La parola ${word} non è palindroma!`;
// if (controll === true) sentence = `La parola ${word} è palindroma!`;
// console.log(sentence);

// $ PARI E DISPARI - SVOLGIMENTO

// * Creiamo tutte le funzioni

// @ Creiamo una funzione in grado di chiedere all'utente di inserire un numero da 1 a 5

function logNumber(min = 1, max = 5) {
    let validNumber;
    let userNumber;

    do {
        userNumber = parseInt(prompt('Inserisci un numero da 1 a 5: ', '2'));
        validNumber = (isNaN(userNumber) || userNumber < 1 || userNumber > 5) ? false : true;
    } while (!validNumber)

    return userNumber;
}

// @ Creiamo una funzione in grado di calcolare un numero random da 1 a 5

function randomNumber(min = 1, max = 5, isMaxIn = true) {
    if (isMaxIn === true) max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

// @ Creiamo una funzione somma

function sum(a, b) {
    const sentence = 'Non si possono sommare due non numeri';

    if (isNaN(a) || isNaN(b) || a === '' || b === '') return sentence;
    return (parseInt(a) + parseInt(b));
}

// @ Creiamo una funzione che determini se la somma data come parametro sia pari o dispari

function isEven(sum) {
    if (sum % 2) return false;
    return true;
}

// * Pari o dispari? Chi vincerà?

// Dichiaro la variabile che manterrà la scelta dell'utente (pari o dispari)

let userChoice;
let isValid;

do {
    userChoice = prompt('Cosa scegli: "pari" o "dispari" ?', 'pari');
    isValid = (userChoice !== 'pari' && userChoice !== 'dispari') ? false : true;
} while (!isValid)

// Facciamo scegliere all'utente un numero da 1 a 5

const userNumber = logNumber();
console.log(`Il numero scelto dall'utente è: ${userNumber}`);

// Calcoliamo randomicamente il numero scelto dalla cpu

const cpuNumber = randomNumber();
console.log(`Il numero scelto dalla cpu è: ${cpuNumber}`);

// Sommiamo i due numeri

const somma = sum(userNumber, cpuNumber);
console.log(`Il somma tra i due è: ${somma}`);

// Dichiariamo il vincitore

if ((isEven && userChoice === 'pari') || (!isEven && userChoice === 'dispari'))
    console.log('Hai vinto!');
else console.log('Hai perso!');


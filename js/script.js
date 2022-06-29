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

function logSentence() {
    let validWord;
    let result;

    do {
        result = prompt('Inserisci una parola: ', 'parola');
        validWord = isNaN(result) ? false : true;
    } while (validWord)

    return result;
}

// @ Creiamo una funzione in grado di verificare che la parola passata come parametro è 
// @ palindroma

function isPalindroma(word) {
    let isPalindroma;
    let reverseWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }

    console.log(reverseWord);
    if (reverseWord === word) isPalindroma = true;
    else isPalindroma = false;

    return isPalindroma;
}

// * Realizziamo l'algoritmo del primo esercizio servendoci delle funzioni precedentemente create

const word = logSentence();
const controll = isPalindroma(word);
let sentence = `La parola ${word} non è palindroma!`;
if (controll === true) sentence = `La parola ${word} è palindroma!`;
console.log(sentence);

// $ PARI E DISPARI - SVOLGIMENTO
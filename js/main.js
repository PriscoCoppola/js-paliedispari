/*************************
    Palidroma
    - Chiedere all’utente di inserire una parola
    - Creare una funzione per capire se la parola inserita è palindroma
*************************/

var parola = prompt('Inserisci una parola').trim().toLowerCase();

var parPal = palindroma(parola);

if (parola === parPal) {
    console.log('La parola ' + parola + ' è palindroma');
} else {
    console.log('La parola ' + parola + ' non è palindroma');
}

// FUNZIONI
// Controlla se la parola è palindroma.
function palindroma(par) {
    var parolaContrario ='';
    
    for (var i = par.length - 1; i >= 0; i--) {
        parolaContrario += par[i];
    }
    
    return parolaContrario;
}

/*************************
    Pari e Dispari
    - L’utente sceglie pari o dispari
    - e inserisce un numero da 1 a 5.
    - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    - Sommiamo i due numeri
    - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    - Dichiariamo chi ha vinto.
*************************/

var scelta = prompt('Fai la tua scelta\nPari\nDispari').trim().toLowerCase();
console.log('l\'utente ha scelto: ' + scelta);
var numeroUtente = parseInt( prompt('Inserisci un numero da 1 a 5') );
console.log('l\'utente ha scelto il numero: ' + numeroUtente);

var numeroRandom = random(1, 5);
console.log('Il numero random è: ' + numeroRandom);

var somma = numeroUtente + numeroRandom;

var parDis = pariDispari(somma);
console.log('La somma dei due numeri è: ' + parDis);

if (parDis === scelta) {
    console.log('Hai Vinto!!!')
} else {
    console.log('Hai Perso :(');
}


// FUNZIONI
// Genera un numero random da min a max
function random(min, max) {
    var random = 0

    random = Math.floor( Math.random() * max) + min;

    return random;
}

// Stabilisce se un numero è pari o dispari
function pariDispari (num) {
    if (num % 2 === 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}
/*************************
    Palidroma
    - Chiedere all’utente di inserire una parola
    - Creare una funzione per capire se la parola inserita è palindroma
*************************/

var parola = prompt("Inserisci una parola").trim().toLowerCase();
var parPal = palindroma(parola);

// Controlla se la parola è palindroma.
function palindroma(par) {
    var parolaContrario ='';
    
    for (var i = par.length - 1; i >= 0; i--) {
        parolaContrario += par[i];
    }
    
    return parolaContrario;
}

if (parola === parPal) {
    console.log('La parola ' + parola + ' è palindroma');
} else {
    console.log('La parola ' + parola + ' non è palindroma');
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
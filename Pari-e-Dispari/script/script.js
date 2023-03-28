/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*
1)fare un prompt che fa scegliere all'utente pari o dispari
2)fare un prompt che fa scegliere un numero da 1 a 5 l'utente
3)inserire numerobot in un ciclo che genera un numero da 1 a 5
4)inserire generanumero in un ciclo e fare l'addizione del numeroutente + numerobot
5)inserire tutto all'interno di un ciclo che determina il vincitore 

*/

let sceltaUtente  = prompt ('scegli pari o dispari')
let numeroUtente  = prompt('inserisci un numero da 1 a 5')
let numeroBot     = generaNumero(numeroUtente + numeroBot)

console.log (numeroBot)

//alert('il numero de essere da 1 a 5');
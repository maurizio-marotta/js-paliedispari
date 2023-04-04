/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const button = document.getElementById('bottone');

function generanumerorandom(v) {

    let n = Math.floor(Math.random() * v) + 1

    return n

}

button.addEventListener('click', function() { 
    
    const pari = document.querySelector('#pari').checked;
    const dispari = document.querySelector('#dispari').checked;
    let numerouser = parseInt(document.getElementById('numero').value)
    let numeropc = generanumerorandom(5)
    let somma = numerouser + numeropc

    console.log(pari , dispari , numerouser, somma );

    document.getElementById('sceltacomputer').innerHTML = `il pc ha scelto: ${numeropc} la somma dei vosti numeri è: ${somma}`

    if (pari==true && somma % 2 == 0) {

        document.getElementById('esito').innerHTML = 'hai vinto la somma è pari'

    } else if (dispari==true && somma % 2 != 0) {

        document.getElementById('esito').innerHTML = 'hai vinto la somma è dispari'

    } else if (pari==false && somma % 2 == 0) {

        document.getElementById('esito').innerHTML = 'hai perso la somma è pari'

    } else if (dispari==false && somma % 2 != 0) {

        document.getElementById('esito').innerHTML = 'hai perso la somma è dispari'

    }    
});
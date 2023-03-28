/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

var parolaUtente = prompt('inserisci una parola');
var parolaGirata = rovesciaParola(parolaUtente);

// Creare una funzione per capire se la parola inserita è palindroma

if(parolaGirata == parolaUtente){
  console.log('è palindroma');
}else{
  console.log('non è palindroma');
}

function rovesciaParola(parola){
  var parolaReverse = '';
  for (var i = parola.length -1; i>=0; i--) {
    parolaReverse += parola[i];
  }
  return parolaReverse;
}
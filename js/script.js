// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// Inizializzo l'array "cognomi" e la var "utente"
var cognomi = ['Rossi','Bianchi','Verdi','Esposito','Caruso'];
var utente = prompt('Inserisci il tuo cognome');

// Eseguo controllo ortografico sull'input dell'utente
utente = utente.charAt(0).toUpperCase()+utente.slice(1).toLowerCase();

// // Controllo ridondanza input utente
var i = 0;
var trovato = false;
while (i < cognomi.length && !trovato) {
    if (utente == cognomi[i]) {
        alert('Sei già nella lista');
        trovato = true;
    }
    i++;
}

// Inserisco il cognome dell'utente nell'array dopo averne verificato l'assenza nella lista
if (trovato == false) {
    cognomi.push(utente);
}

// Ordino gli elementi dell'array (sort() esegue ordine alfabetico di default)
cognomi.sort();

// Stampa sul DOM della lista dei cognomi e della posizione dell'utente usando il metodo indexOf
// NB: vedi in fondo metodo alternativo
document.getElementById('lista1').innerHTML = cognomi;
document.getElementById('posto1').innerHTML = 'Ti trovi alla posizione ' + (cognomi.indexOf(utente) + 1);

// Stampa sotto forma di lista ul
for (var i = 0; i < cognomi.length; i++) {
    document.getElementById('lista2').innerHTML += '<li>' + cognomi[i] + '</li>';
    document.getElementById('posto2').innerHTML = 'Ti trovi alla posizione ' + (cognomi.indexOf(utente) + 1);
}

// // Algoritmo per stampare la posizione dell'utente: esempio visto a lezione ma era concepito per verificare la presenza del dato nella lista. Qui perde un po' del suo valore...
// var i = 0;
// var posizione = -1;
// while (i < cognomi.length && posizione == -1) {
//     if (utente == cognomi[i]) {
//         posizione = ++i;
//     }
//     i++;
// }
//
// if (posizione != -1) {
//     document.getElementById('posto').innerHTML = 'Ti trovi alla posizione ' + posizione;
// }

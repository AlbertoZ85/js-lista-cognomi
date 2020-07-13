// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// Inizializzo l'array "cognomi" e la var "utente"
var cognomi = ['Rossi','Bianchi','Verdi','Esposito','Caruso'];
var utente = prompt('Inserisci il tuo cognome');
// Eseguo controllo ortografico sull'input dell'utente
var utenteCorretto = (utente.charAt(0).toUpperCase())+(utente.slice(1).toLowerCase());
// Inserisco il dato dell'utente nell'array
cognomi.push(utenteCorretto);
// Ordino gli elementi dell'array (sort() esegue ordine alfabetico di default)
cognomi.sort();
// Stampa sul DOM della lista
document.getElementById('lista').innerHTML = cognomi;

// Algoritmo per stampare la posizione dell'utente
var i = 0;
var posizione = -1;
while (i < cognomi.length && posizione == -1) {
    if (utenteCorretto == cognomi[i]) {
        posizione = ++i;
    }
    i++;
}

if (posizione != -1) {
    document.getElementById('posto').innerHTML = 'Ti trovi alla posizione ' + posizione;
}

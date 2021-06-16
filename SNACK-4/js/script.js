/*Snack 4 - 
Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
nome
cognome
age
descrizione

Per nome, cognome ed age assegnate direttamente nel codice i valori che volete. 
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.

{
  nome: 'Pippo',
  cognome: 'Baudo',
  age: 80,
  descrizione: ''
} 

Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà. 

Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;) 

Stampiamo con un console.log il risultato di questo array di studenti aggiornato.
*/
var listaStudenti = document.getElementsByClassName("lista-studenti");



var studenti = [
    {
        nome: 'pippo',
        cognome: 'Baudo',
        age: 80,
        descrizione: ''
    },

    {
        nome: 'gerry',
        cognome: 'scotti',
        age: 60,
        descrizione: ''
    },

    {
        nome: 'Paolo',
        cognome: 'bonolis',
        age: 50,
        descrizione: ''
    }

]

for(var x=0; x <studenti.length ; x++){
 studenti[x].descrizione =  prompt("cosa ne pensi di " + studenti[x].nome + "?") ;

}

console.log(studenti)

for(var x=0; x <studenti.length ; x++){
    for(var key in studenti[x]){
        listaStudenti[x].innerHTML+="<li> " + key +" : " + studenti[x][key] +" </li>";
    }  
   }

var palla = {
    nome: 'palla',
    peso: 10 
}
console.log(palla)

palla.peso = prompt('Inserisci il peso della palla');



console.log(palla)

var giochi = []

giochi.push(palla.peso)
console.log(giochi)


var newGame = prompt('Inserisci il nome dell nuovo gioco');

giochi.push({
    gioco: newGame
});

console.log(giochi)
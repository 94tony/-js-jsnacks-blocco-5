var number = [24 , 10 , 40]

var somma = 0

for(var i=0; i<number.length; i++){
    somma+=parseInt(number[i]);
    }
    
   var risultato = somma/=number.length;
   

    console.log(risultato)






    
    var lakers = [
        {
            nome: 'Pippo',
            cognome: 'Baudo',
            age: 80,
            punteggio: 30
        },
        {
            nome: 'Mimmo',
            cognome: 'Mimmo',
            age: 11,
            punteggio: 20
        },

        {
            nome: 'adina',
            cognome: 'pop',
            age: 11,
            punteggio: 50
        }
    ]; 
    console.log(lakers)
    var score = 0

    for(var x=0; x <lakers.length; x++){
        score+= lakers[x].punteggio;
        }
    
        var mediaScore = score / lakers.length;
        

        console.log(mediaScore)

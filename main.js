'use strict';

for(let i=1; i<=100; i++ ){ //Ciclo for che va da 1 a 100 (estremi compresi)
    if( (i%3===0) && (i%5===0) ){ //Controllo se i moduli per 3 e per 5 siano entrambi 0
        console.log("FizzBuzz");
    }else if(i%3===0){ //Se il numero non è sia multiplo di 3 che di 5 ALLORA controllo se è SOLO multiplo di 3
        console.log("Fizz"); 
    }else if(i%5===0){ //Se il numero non è SOLO multiplo di 3 ALLORA controllo se è SOLO multiplo di 5
        console.log("Buzz");
    }else{ //Il numero non è NE multiplo di 3 NE multiplo di 5 quindi verrà visualizzata la nostra variabile contatrice
        console.log(i);
    }
}
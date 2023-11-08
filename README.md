DESCRIZIONE DEL PROBLEMA:

    Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

    Prima di partire a scrivere codice poniamoci qualche domanda:
    Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

    Consigli del giorno:
    Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
    Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

    BONUS 1:
    Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

    BONUS 2:
    Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


IDEA DI RISOLUZIONE: 

    1. Utilizzare un ciclo for che tramite una variabile contatore che inizializzata a 1 e che incrementa fino a 100 (100 compreso) ci permetta iterare per 100 volte le condizioni espresse nel punto 1a. 

    1a. Tramite una serie di condizioni if controlliamo se il valore assunto dalla nostra variabile contatore sia un multiplo di 3, un multiplo di 5 od entrambi, nel caso in cui una di queste condizioni si verifichi verrà visualizzato nel logun valora che potrà essere rispettavamente uno tra "Fizz", "Buzz" o "FizzBuzz"; Nel caso in cui non si verifichi nessuna delle condizioni sopracitate verrà visualizzato il valore numerico della nostra variabile contatore.
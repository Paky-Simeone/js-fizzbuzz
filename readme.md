# Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
Prima di partire a scrivere codice poniamoci qualche domanda:
- Come faccio a sapere se un numero è divisibile per un altro?
- Abbiamo visto qualcosa di particolare che possiamo usare?
    - Consigli del giorno:
        1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
        2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
1. BONUS (1):
Crea un container nel DOM , aggiungendo (attraverso le funzioni document.createElement() e append()) un elemento html con il numero o la stringa corretta da mostrare.
2. BONUS (2):
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

## Svolgimento
1. Creiamo un ciclo for con un contatore che va ad incrementarsi fino ad arrivare a 100
    - SE il contatore è un multiplo di 15 stampiamo FizzBuzz
    - ALTRIMENTI SE il contatore è un multiplo di 5 stampiamo Buzz
    - ALTRIMENTI SE il contatore è un multiplo di 3 stampiamo Fizz
    - ALTRIMENTI stampi il contatore

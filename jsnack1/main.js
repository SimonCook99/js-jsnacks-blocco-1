let numeriUtente = [];

let titoloSomma = document.getElementById("somma");

//variabile della somma degli elementi
let sommaTotale = 0;

for(let i = 0; i < 10; i++){
    let numeroCorrente = parseInt(prompt("Inserisci il " + (i+1) + "° numero del vettore"));

    //se il numero inserito non è valido, lo chedo nuovamente, e solo quando è valido procedo al push nel vettore
    while(numeroCorrente < 0 || isNaN(numeroCorrente)){
        console.log(numeriUtente);
        numeroCorrente = parseInt(prompt("Valore non valido, inserisci il " + (i+1) + "° numero del vettore (numero > 0)"));
    }

    numeriUtente.push(numeroCorrente);
    
    sommaTotale += numeriUtente[i];
}

console.log(numeriUtente);

titoloSomma.innerHTML = "La somma dei numeri inseriti è: " + sommaTotale;

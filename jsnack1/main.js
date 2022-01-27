let numeriUtente = [];

let titoloSomma = document.getElementById("somma");

let sommaTotale = 0;

for(let i = 0; i < 10; i++){
    let numeroCorrente = parseInt(prompt("Inserisci il " + (i+1) + "° numero del vettore"));

    while(numeroCorrente < 0 || isNaN(numeroCorrente)){
        console.log(numeriUtente);
        let numeroCorrente = parseInt(prompt("Valore non valido, inserisci il " + (i+1) + "° numero del vettore (numero > 0)"));
        numeriUtente[i] = numeroCorrente;
    }

    numeriUtente.push(numeroCorrente);
    
    sommaTotale += numeriUtente[i];
}

console.log(numeriUtente);

titoloSomma.innerHTML = "La somma dei numeri inseriti è: " + sommaTotale;

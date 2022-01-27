let numeroCubi = parseInt(prompt("quanti numeri al cubo vuoi stampare?"));

while(numeroCubi < 0 || isNaN(numeroCubi)){
    numeroCubi = parseInt(prompt("Valore non valido, quanti numeri al cubo vuoi stampare?"));
}

let numeri = [];

let testo = document.getElementById("cubi");

for(let i = 0; i < numeroCubi; i++){

    //metto nel vettore il cubo di i, fino al momento in cui i non raggiunge il numero scelto dall'utente
    numeri.push(i * i * i);

}

testo.innerHTML = numeri;
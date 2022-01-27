let numeri = [1,2,3,4,5,6,7,8,9,10];

let titoloSommaMedia = document.getElementById("somma-media");

let sommaTotale = 0;
let mediaTotale = 0;

for(let i = 0; i < numeri.length; i++){
    sommaTotale += numeri[i];
}

mediaTotale = sommaTotale / numeri.length


titoloSommaMedia.innerHTML = "La somma dei primi 10 numeri inseriti è: " + sommaTotale + " mentre la media è: " + mediaTotale;

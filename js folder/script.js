let contatore = 00;
let impiegati = 99;

let numEvasi = document.getElementById("numEvasi");
let numImpiegati = document.getElementById("numImpiegati");


function incrementa(){
    if (contatore < 99){
        contatore++;
        if (contatore < 10){
            contatore = "0" + contatore;
        };
        numEvasi.innerHTML = contatore;  
    }
}

function decrementa(){
    if (contatore > 0){
        contatore--;
        if (contatore < 10){
            contatore = "0" + contatore;
        };
        numEvasi.innerHTML = contatore;
    }
} 

function sottraiImpiegati(){
    if (impiegati > 0){
        impiegati--;
        if (impiegati < 10){
            impiegati = "0" + impiegati;
        };
        numImpiegati.innerHTML = impiegati;
    }
}

function aggiungiImpiegati(){
    if (impiegati < 99){
        impiegati++;
        if (impiegati < 10){
            impiegati = "0" + impiegati;
        };
        numImpiegati.innerHTML = impiegati;
    }
}

function counterReset() {
    contatore = 0;
    if (contatore < 10){
        contatore = "0" + contatore;
    };
    numEvasi.innerHTML = contatore;
    impiegati = 99;
    numImpiegati.innerHTML = impiegati;
}


increm.addEventListener('click',incrementa);
increm.addEventListener("click",sottraiImpiegati);
decrem.addEventListener('click',decrementa);
decrem.addEventListener('click',aggiungiImpiegati);
reset.addEventListener("click", counterReset);
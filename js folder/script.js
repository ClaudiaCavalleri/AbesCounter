let counter = 00;
let employees = 99;

let numEscapees = document.getElementById("numEscapees");
let numEmployees = document.getElementById("numEmployees");

function increase(){
    if (counter < 99 && employees > 00){
        counter++;
        employees--;
        if (counter < 10){
            counter = "0" + counter;    
        } else if (employees < 10){
            employees = "0" + employees;
        }
        numEscapees.innerHTML = counter; 
        numEmployees.innerHTML = employees; 
    }
}

function decrease(){
    if (counter > 00 && employees < 99 ){
        counter--;
        employees++;
        if (counter < 10){
            counter = "0" + counter;    
        } else if (employees < 10){
            employees = "0" + employees;
        }
        numEscapees.innerHTML = counter; 
        numEmployees.innerHTML = employees; 
    }
}

function counterReset() {
    counter = 0;
    if (counter < 10){
        counter = "0" + counter;
    };
    numEscapees.innerHTML = counter;
    employees = 99;
    numEmployees.innerHTML = employees;
}


inc.addEventListener('click', increase);
dec.addEventListener('click', decrease);
reset.addEventListener("click", counterReset);
let counter = 00;
let employees = 99;

let numEscapees = document.getElementById("numEscapees");
let numEmployees = document.getElementById("numEmployees");


function increase(){
    if (counter < 99){
        counter++;
        if (counter < 10){
            counter = "0" + counter;
        };
        numEscapees.innerHTML = counter;  
    }
}

function decrease(){
    if (counter > 0){
        counter--;
        if (counter < 10){
            counter = "0" + counter;
        };
        numEscapees.innerHTML = counter;
    }
} 

function decreaseEmpolyees(){
    if (employees > 0){
        employees--;
        if (employees < 10){
            employees = "0" + employees;
        };
        numEmployees.innerHTML = employees;
    }
}

function increaseEmployees(){
    if (employees < 99){
        employees++;
        if (employees < 10){
            employees = "0" + employees;
        };
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
inc.addEventListener("click", decreaseEmpolyees);
dec.addEventListener('click', decrease);
dec.addEventListener('click', increaseEmployees);
reset.addEventListener("click", counterReset);
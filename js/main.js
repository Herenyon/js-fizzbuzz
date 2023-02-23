'use strict';
// const ul per prendere la classe list dall'ul nell'html 
const ul = document.querySelector("ul.list")
// variabile index non chiamata per dargli il valore all'interno del for
let index
// for che fino a 100 continua a loopare
for (let i = 1; i <= 100; i++) {
    // if per poter stampare fizzbuzz soltanto al posto dei numeri sia divisibili per 3 che per 5 
    if (i % 3 === 0 && i % 5 === 0) {
        
        index = "FizzBuzz";
        console.log('FizzBuzz');
        const element = `<li class="box box--${index}">${index}</li>`;
        ul.innerHTML += element;
    }
    // else if per poter stampare buzz solo al posto dei numeri divisibili per 5
    else if (i % 5 === 0) {
        
        const element = `<li class="box box--${index}">${index}</li>`;
        ul.innerHTML += element;
        index = "Buzz";
        console.log('Buzz');
    }
    // else if per poter stampare buzz solo al posto dei numeri divisibili per 3
    else if (i % 3 === 0) {

        index = "Fizz";
        console.log('Fizz');
        const element = `<li class="box box--${index}">${index}</li>`;
        ul.innerHTML += element;
    }
    // else per stampare tutti gli altri numeri che non vengno compresi dalle condizioni precedenti
    else {

        console.log(i);
        const element = `<li class="box box--${i}">${i}</li>`;
        ul.innerHTML += element;

    }

}
//Refrence display element
const display = document.getElementById('display');

//Tracj=k if we have performed a calculation
let justCalculated = false;

function appendTODisplay(value){
    console.log('Button pressed: ', value);
    
    alert('You pressed: ' + value);
}

function clearDislpay(){
    console.log('Clear button pressed: ');

    alert('clear button was clicked');
}

function Brakects(){
    console.log('Brackets button pressed: ');

    alert('brackets button was clicked');
}

function Percentage(){
    console.log('Percentage button pressed: ');

    alert('percentage button was clicked');
}

function delectLast(){
    console.log('Delect button pressed: ');

    alert('delect button was clicked');
}

function Calculate(){
    console.log('Equals button pressed: ');

    alert('Equals button was clicked');
}

//
document.addEventListener('DOMContentLoaded', function(){
    console.log('Calculator loaded successfully: ');
    console.log('Display elemt', display);

    if(display){
        console.log('Current display value: ', display.value);
    }
    else{
        console.log('Display element not found');

    }


})



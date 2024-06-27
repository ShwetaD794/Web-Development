// BUTTON EVENTS 
let btns = document.querySelectorAll('div button');

for(let btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
}
function sayHello(){
    alert('hello');
};

function sayName(){
    alert('Shweta Dhote');
};



// THIS KEYWORD
let p = document.querySelector('p');
// p.addEventListener('click', function(){
//     console.log(this);
// });

 
p.addEventListener("click", function(event){
    console.log(event);
    console.log('button clicked');
});



// KEYBOARD EVENTS
let input = document.querySelector('input');

input.addEventListener("keydown", function(event){
    console.log(event.code);
    if(event.code == "ArrowUp"){
        console.log("character moves forward");
    }
    else if(event.code == "ArrowDown"){
        console.log("character moves backward");
    }
    else if(event.code == "KeyL"){
        console.log("character moves Left");
    }
    else if(event.code == "ArrowRight"){
        console.log("character moves right");
    }
});



// FORM 
let form = document.querySelector('form');

form.addEventListener("submit", function(event){
    event.preventDefault();
    
});

let user = document.querySelector('#user');

// user.addEventListener("change", function(){
//     console.log("input changed");
//     console.log("input value = ", this.value);
// });

user.addEventListener("input", function(){
    console.log("input changed");
    console.log("input value = ", this.value);
});


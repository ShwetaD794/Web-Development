// let para1 = document.createElement('p');
// para1.innerText = "Hey, I'm red";
// document.querySelector('body').append(para1);
// para1.classList.add('red');

// let heading = document.createElement('h3');
// heading.innerText = "I'm a blue h3!";
// document.querySelector('body').append(heading);
// heading.classList.add('blue');

// let container = document.createElement('div');
// document.querySelector('body').append(container);
// container.classList.add('divProp');

// let head = document.createElement('h1');
// head.innerText = "hi, I am in div";
// let p = document.createElement('p');
// p.innerText = "me too!";

// container.append(head);
// container.prepend(p);

// QUE 1

let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click me";
document.querySelector('body').append(input);
document.querySelector('body').append(button);

// QUE 2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// QUE 3
let btn = document.querySelector('#btn');
btn.classList.add('buttonP');

// QUE 4
let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
h1.classList.add('h1Style');
document.querySelector('body').append(h1);

// QUE 5
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(p);



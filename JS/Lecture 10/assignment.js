

window.addEventListener("scroll", function(){
    console.log('page is scrolled')
});

let btn = document.querySelector('button');

btn.addEventListener("click", function(){
    btn.style.backgroundColor = "green";
});

let h2 = document.querySelector('h2');
let inp = document.querySelector('input');

inp.addEventListener("input", function(){
    console.log(inp.value);
    h2.innerText = inp.value.replace(/[^a-zA-Z\s]/g, ''); //only characters and whitespace input

});



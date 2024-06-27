// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let lis = document.querySelectorAll('li');

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();  //TO AVOID NESTED CHANGES
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');


btn.addEventListener("click", function(){
    console.log(inp.value);
    let li = document.createElement('li');

    let newBtn = document.createElement('button');
    newBtn.innerText = "Delete";
    newBtn.classList.add('delete');

    li.innerText = inp.value;
    ul.appendChild(li);
    li.append(newBtn);
    inp.value = "";
});

// let delbtns = document.querySelectorAll('.delete');

// for(let delbtn of delbtns){
// delbtn.addEventListener("click", function(){
//     let par = this.parentElement;
//     par.remove();
// });
// }

ul.addEventListener("click", function(event){
    if (event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
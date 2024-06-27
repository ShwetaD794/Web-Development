// ASYNC FUNCTION 
async function greet(){
    throw "weak connection";
    return "hello";
}
greet()
.then((result) => {
console.log("promise was resolved");
console.log("result : ", result);
})
.catch((error) => {
console.log("error : ", error);
})


// AWAIT FUNCTION 
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}
async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

let h1 = document.querySelector('h1');

function changeColor(color, delay){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3){
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log("color : ", color);
            resolve("color changed");
        }, delay);
    })
    
}
async function demoColor(){
    try{
        await changeColor("red", 1000);
        await changeColor("pink", 1000);
        await changeColor("purple", 1000);
         await changeColor("magenta", 1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
   
    let num = 5;
     console.log(num);
}
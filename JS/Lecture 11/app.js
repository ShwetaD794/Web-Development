// CALLBACK HELL 

let h1 = document.querySelector('h1');

function changeColor(color, delay){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    })
    
}

changeColor("red", 1000)
.then( () => {
    console.log("red color applied");
    return changeColor("purple", 1000);
})
    .then( () => {
        console.log("purple color applied");
        return changeColor("pink", 1000);
    })
        .then( () => {
            console.log("pink color applied");
});


// function saveToDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDb("Shweta Dhote",
//  () => {
//     console.log("your data was saved  " );
//     saveToDb("apna college",
//     () => {
//         console.log("data2 saved");
//     }, 
//     () => {
//         console.log("weak connection");
//     }
//     )
// } , 
// () => {
//     console.log("weak connection. data not saved");
// }
// );

// PROMISES

function saveToDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("data was saved");
        }else{
            reject("weak connection");
        }
    });
}

let request = saveToDb("shweta dhote");
request.then( (result) => {
    console.log("data1 saved");
    console.log("result of promise : ",result);
    return saveToDb("hello world");  //PROMISE CHAINING
})
.then( (result) => {
    console.log("data2 saved");
    console.log("result of promise : ",result);
})
.catch( (error) => {
    console.log("promise was rejected");
    console.log("error : ",error);
});

// console.log("Hello World!");
// console.log("Shweta Dhote");
let a = 10;
let b = 5;
console.log("sum is" ,a + b);
 let pencilPrice = 10;
 let erasorPrice = 5;
let output = "the total price is :" + (pencilPrice + erasorPrice) + "Rupees"
console.log(output);

// TEMPLATE LITERALS
let outPut = `the total price is : ${pencilPrice + erasorPrice} Rupees.`
console.log(outPut);

// OPERATORS
let Age = 18;
console.log(Age >= 18);

console.log(5 == '5');
console.log(5 === '5');

// CONDITIONAL STATEMENTS
let age = 24;
if(age >= 18){
    console.log("you can vote");
}
if(age > 20){
    console.log("you are in your 20's");
}

let firstName = "Shweta";
if(firstName == "Shweta"){
    console.log(`welcome ${firstName}`);
}

// PRACTICE QUESTION

let color = "red";
if(color === "red"){
    console.log("Stop!");
}
else if(color === "yellow"){
    console.log("slow down");
}
else if(color === "green"){
    console.log("go");
}

// POPCORN PRICE 

let size = 'L';
if(size === "XL"){
    console.log("price is Rs. 250");
}
else if(size === "L"){
    console.log("price is Rs. 200");
}
else if(size === "M"){
    console.log("price is Rs. 100");
}
else if(size === "S"){
    console.log("price is Rs. 50");
}

// GOOD STRING 

let str = 'apple';
if((str[0] === 'a' && str.length > 3)){
    console.log("good string")
}else{
    console.log("not a good string")
}

// WEEK DAYS 

let day = 2;

switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default : 
        console.log("not a week day");

}
// ALERT AND PROMPTS

alert("something is wrong!");
console.log("this is a simple log");
console.error("this is an error log");
console.warn("this is a warning log");

let Name = prompt("enter your name : ");
let roll = prompt("enter roll number : ");
console.log("welcome", Name, " ", roll, "!");

// QUE 1

let num = 22;
if(num % 10 == 0){
    console.log("good");
}else{
    console.log("bad")
    
}

// QUE 2

let Name = prompt("enter your name : ");
let age = prompt("enter your age : ");
alert(`${Name} is ${age} years old`);

// QUE 3

let Quarter = 5;
switch(Quarter){
    case 1 :
        console.log("January, February, March");
        break;
    case 2 :
        console.log("April, May, June");
        break;
    case 3 :
        console.log("July, August, September");
        break;
    case 4 :
        console.log("October, November, December");
        break;
    default :
        console.log("not a month")
}

// QUE 4

let str = "Atlassian";
if((str[0] === 'A' || str[0] === 'a') && (str.length > 5)){
    console.log("golden string");
}else{
    console.log("not a golden string");
}

// QUE 5

let a = 10;
let b = 2;
let c = 4;
if(a > b){
    if(a > c){
        console.log(`${a} is greatest number`);
    }else {
        console.log(`${c} is greatest number`);
    }
}else if(b > c){
    console.log(`${b} is greatest number`);
}else{
    console.log(`${c} is greatest number`);
}

// QUE 6

let num1 = 32;
let num2 = 47852;
if((num1 % 10 ) == (num2 % 10)){
    console.log("the numbers have same last digit which is", num1%10);
}else{
    console.log("the numbers don't have same last digit");
}


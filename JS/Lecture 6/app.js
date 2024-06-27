function poem(){
    console.log("twinkle twinkle little star");
    console.log("how I wonder what you are");
                
}
poem();


function dice(){
    console.log(Math.floor(Math.random() * 6) + 1);
}
dice();


function avg(a, b, c){
    let avgSum = (a + b + c)/3;
    console.log(avgSum);
}
avg(3,4,2);


function mulTable(n){
    for(let i=n; i<=n*10; i++){
        if(i%n == 0){
            console.log(i);
        }
    }
}
mulTable(5);


function sum(n){
    let s = 0;
    for(let i=1; i<=n; i++){
        s = s + i;
    }
    return(s);
}
console.log(sum(100));

let arr = ["Shweta", " ", "Khushal", " ", "Dhote" ];
let concat = "";

function ConcatStr(arr){
    for(let i=0; i<arr.length; i++){
        concat += arr[i];
    }
        return concat;
}
console.log(ConcatStr(arr));

// FUNCTION EXPRESSIONS
let mul = function(a,b){
    return a*b;
}
console.log(mul(2,3));


// HIGHER ORDER FUNCTIONS

function multipleGreet(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
}
multipleGreet(greet,4);



function oddOrEven(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
        else if(request == "even"){
            let even = function(n){
                console.log(n%2 == 0);
            }
            returneven
        
    }else{
        console.log("wrong request");
    }
}
let request = "odd";
let func = oddOrEven(request);
console.log(func(3));

// METHODS/
const calculator = {
    add : function(a, b){
        return a+b;
    },
    sub : function(a, b){
        return a-b;
    },
    mul : function(a, b){
        return a*b;
    }
};
console.log(calculator.add(2,3));
const calc = {
    add(a, b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    },
    mul(a, b){
        return a*b;
    }
};
console.log(calc.add(3,3));
// QUE 1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}
console.log(arr);

// QUE 2
let number = 287152;
let count = 0;

let copy = number;

while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

// QUE 3
let n = 287152;
let sum = 0;
let Copy = n;

while(Copy > 0){
let digit = Copy % 10;
sum += digit;
Copy = Math.floor(Copy/10);
}
console.log("sum is : " + sum);

// QUE 4
let num1 = prompt("enter a number");
let fact = 1;
for(let i=1; i<=num1; i++){

    fact = fact * i;
}

console.log(`factorial of ${num1} is ${fact}`);

// QUE 5
let arr1 = [1,2,6,9,4];
let largest = 0;

for(let i=0; i<arr1.length; i++){
if(largest < arr1[i]){
    largest = arr1[i];
}
}
console.log(largest + " is largest");
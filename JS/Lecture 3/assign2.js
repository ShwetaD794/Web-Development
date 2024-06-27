let arr = [7, 9, 0, -2];
let n = 3;

// QUE 1
let ans = arr.slice(0,n);
console.log(ans);

// QUE 2
let ans2 = arr.splice(arr.length-n);
console.log(ans2);

// QUE 3
let str = prompt("Enter a string");
if(str.length == 0){
    console.log("string is empty");
}else{
    console.log("string is not empty");
}

// QUE 4
let Name = "Shweta";
if(Name[3] == Name[3].toUpperCase()){
    console.log("the character is uppercase");
}else{
    console.log("the character is lowercase");
}

// QUE 5
let str2 = "  shweta  ";
console.log(str2.trim());

// QUE 6
let arr1 = [3, 6, 7, 9, 11];
let item = 11;
if(arr1.indexOf(item) != -1){
    console.log("the element is present");
}else{
    console.log("the element is not present");
}








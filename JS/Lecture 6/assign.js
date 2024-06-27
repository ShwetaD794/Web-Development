// QUE 1
let arr = [1,4,8,2,6];
let num = 1;
function greaterElements(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
greaterElements(arr);

// QUE 2
let str1 = "aabbbccccdd";

function getStr(str1){
    let ans = "";
for(let i=0; i<str1.length; i++){
    let store = str1[i];
   if(ans.indexOf(store) == -1){
    ans += store;
   }
}
return ans;
}
console.log(getStr(str1));

// QUE 3


let country = ["india", "Australia", "thailand", "Afghanistan"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if (currLen > ansLen) {
    ansIdx = i;
   
    }
    }
    return country[ansIdx];
}
console.log(longestName(country));


// QUE 4

let str = "shweta";
let count = 0;

function countvowel(str){

for(let i=0; i<str.length; i++){
    if (
        str.charAt(i) == "a" ||
        str.charAt(i) == "e" ||
        str.charAt(i) == "i" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u"
        ) {
        count++;
        }
        }
        return count;
    }
console.log(countvowel(str));


// QUE 5

let start, end;
function randomNumber(start,end){
    let diff = end - start;
let number = Math.floor(Math.random() * diff) + start;
console.log(number);
}
randomNumber(2,4);
// QUE 1
let arr = [1,3,6,2,5];
let sum = 0;

const arrayAvg = (arr) => {
    for(let number of arr){
         sum += number;
    }
    return sum / arr.length;
}
console.log(arrayAvg(arr));

// QUE 2
const isEven = (n) => {
    if(n%2 == 0){
        console.log(`${n} is an even number`);
    }else{
        console.log(`${n} is not an even number`);
    }
}
isEven(5);

// QUE 4
let length = 4;
function callback(){
    console.log(this.length);
}
const object = {
    length : 5,
    method(callback){
        callback();
    },
};
console.log(object.method(callback, 1, 2));
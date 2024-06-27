//ARRAY METHODS

// FOREACH 
let arr = [1,2,3,4,5];

let print = function(el){
    console.log(el);
};

arr.forEach(print);


// MAP 
let num = [1,2,3,4];
let double = num.map(function(el){
    return el*3;
});
console.log(double);


let student = [
    {
        name : "Shweta",
        gender : "female",
        marks : 94,
    },
    {
        name : "Shreyash",
        gender : "male",
        marks : 95,
    },
];

let gpa = student.map((el) =>{
    return el.marks / 10;
});

console.log(gpa);



// FILTER 
let nums = [1,2,3,4,5,6,7,8,9,10,12,11];
let ans = nums.filter((el) => {
    return el % 2 != 0;
});
console.log(ans);



// EVERY 
let nums1 = [1,2,3,4,5,6,7,8,9,10,12,11];
let ans1 = nums.every((el) => {
    return el % 2 == 0;
});
console.log(ans1);



// SOME 
let nums2 = [1,2,3,4,5,6,7,8,9,10,12,11];
let ans2 = nums.some((el) => {
    return el % 2 == 0;
});
console.log(ans2);



// REDUCE 
let num3 = [1, 2, 3, 4];
let ans3 = num3.reduce( (res, el) => (res + el));
console.log(ans3);

let arr1 = [1,2,3,4,5,6,7,8,9,11];
let result = arr1.reduce( (max, el) => {
    if(max < el){
        return el;
    }else{
        return max;
    }
    console.log(max);
    });
console.log(result);


let arr2 = [10, 20, 30, 40];
let res = arr2.every((el) => {
    return el % 10 == 0;
}
);
console.log(res);


let arr3 = [1,2,3,4,5,6,7,8,9,10,12,11];

function getMin(arr3){
    let res1 = arr3.reduce( (min, el) => {
        if(min < el){
            return min;
        }else{
            return el;
        }
    });
    return res1;
}

console.log(getMin(arr3));


// SPREAD 
let name = "Shweta";
console.log(...name);

// SPREAD IN OBJECT LITERALS
let Arr = [1, 2, 3, 4];  //values
let obj = {...Arr};  //keys and values
console.log(obj);

// SPREAD IN ARRAY LITERALS
let Arr1 = [1, 2, 3, 4]; 
let Arr2 = [11, 22, 33, 44]; 
let newArr = [...Arr1, ...Arr2];
console.log(newArr);


// REST 
function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us : " + args[i])
    }
}
sum(1,2,3,4);

function min(){
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);  //arguments is not an array
}

function sum1(marks,...args){
    console.log(marks);
    console.log(args);
    return args.reduce( (sum, el) => sum+el);
}
sum1("shweta",4,6);


// DESTRUCTURING
const person = {
    name : "shweta",
    age : 20, 
    gender : "female",
    username : 'shwetaDhote',
};
let {username : user, gender, surname = "dhote"} = person;

let names = ['shweta', 'shreyash', 'aariv', 'shraddha', 'sachin', 'sahil'];
let [runner, winner, ...otherss] = names;
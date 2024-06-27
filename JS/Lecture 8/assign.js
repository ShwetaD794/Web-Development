// QUE 1
let arr = [1, 2, 3, 4];

let ans = arr.map( (el) => {
    return el * el;
});

let res = ans.reduce( (sum, el) =>{
    return sum += el ;
});

let avg = res / arr.length;

// QUE 2
let arr2 = [1, 2, 3, 4];

let ans1 = arr2.map((el) => {
    return el + 5;
});

// QUE 3
let str = ['a', 'b', 'c', 'd'];

let ans3 = str.map( (strings) => {
    return strings.toUpperCase();
});


// QUE 4

const doubleAndReturnArgs = (Arr, ...args) => ([
    ...Arr,
    ...args.map( (el) => el * 2),
]);
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));

// QUE 5
const mergeObjects = (obj1, obj2) => ( {...obj1, ...obj2});
console.log(mergeObjects( {a: 1, b: 2}, {c: 3, d: 4}));

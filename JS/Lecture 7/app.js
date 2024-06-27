// THIS KEYWORD
const student = {
    name : "shweta",
    age : 20,
    eng : 95,
    math : 93,
    phy : 97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.phy + this.math) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }

}
student.getAvg();

function getAvg(){
    console.log(this);
}
getAvg();


// TRY AND CATCH 
console.log("hello");
console.log("hello");
try{
    console.log(a);
}catch(err){
    console.log("caught an error.. a is not defined");
    console.log(err);
}
console.log("Bye");
console.log("Bye");
console.log("Bye");


// ARROW FUNCTION 
const sum = (a, b) => {
    console.log(a+b);
}
sum(2,3);

// IMPLICIT RETURN 
const mul = (a, b) => (
    a * b
);
console.log(mul(4,2));

// SET TIMEOUT 
// console.log("hi there!");
// setTimeout( () => {
//     console.log("Apna College");
// }, 4000);
// console.log("welcome to");

// SET INTERVAL 
// let id = setInterval ( () => {
//     console.log("Shweta Dhote");
// },2000);

// console.log(id);

// THIS IN ARROW FUNCTION 
const stu = {
    name : "shweta",
    marks : 95,
    gender : "female",
    prop : this, //global scope
    getName : function() {
        console.log(this);
        return this.marks;
    },
    getMarks : () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
    getInfo1 : function(){
        setTimeout( () => {
            console.log(this); //student
        },2000);
    },
    getInfo2 : function(){
        setTimeout( function() {
            console.log(this); //window
        },2000);
    }
};
stu.getName();
stu.getMarks();
stu.getInfo1();
stu.getInfo2();


const squ = (n) => (
    n*n
);
console.log(squ(4));


let id = setInterval( () => {
    console.log("Hello World");
},2000);

setTimeout( () => {
    clearInterval(id);
}, 10000);
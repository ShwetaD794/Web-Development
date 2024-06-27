// OBJECT LITERALS


let student = {
    name : "shweta",
    age : 20,
    marks : 90
};
console.log(student);

const item = {
    price : 100,
    discount : 50,
    colors : ["red", "white", "purple"]

}

// THRED / TWITTER POST 
const post = {
    username : "Shweta Dhote",
    content : "This is my #firstPost",
    likes : 150,
    reposts : 5,
    tags : ['apnacollege', "sigma"]
};

console.log(post["content"]);
console.log(post["likes"]);
console.log(post.username);

let prop = "reposts";
console.log(post[prop]);
console.log(post.prop);

// JS CONVERTS ALL KEYS INTO STRINGS WHEN ACCESED WITH BOX BRACKET
const obj = {
    1: "a",
    2: "b",
    true : "c",
    null : "d"
};

// UPDATE VALUES 
const stu = {
    name : "shweta",
    surname : "dhote",
    place : "mumbai",
    age : 20
};
console.log(stu);
stu.place = "delhi";
console.log(stu.place);
console.log(stu);

// ADD VALUES 
stu.gender = "female";
console.log(stu.gender);
console.log(stu);

// DELETE VALUES 
delete stu.place;
console.log(stu);

// OBJECT OF OBJECTS 
const classInfo = {
    shweta : {
        grade : "A+",
        age : 20,
    },
    shreyash : {
        grade : "A+",
        age : 18,
    },
    aariv : {
        grade : "A+",
        age : 21,
    },

};
console.log(classInfo.shweta);
console.log(classInfo.shreyash);
console.log(classInfo.shreyash.grade);
classInfo.shweta.city = "wani";
console.log(classInfo.shweta);

// ARRAY OF OBJECTS
const classData = [
    {
        name : "shweta",
        grade : "A+"
    },
    {
        name : "shreyash",
        grade : "A+"
    },
    {
        name : "aariv",
        grade : "A+"
    }
    
];
console.log(classData);
console.log(classData[1]);
classData[1].city = 'wani';
console.log(classData[1]);

// RANDOM INTEGERS (from 1 to 10)
let step1 = Math.random();
console.log(step1);
let step2 = step1 * 10;
console.log(step2);
let step3 = Math.floor(step2);
console.log(step3);
let step4 = step3 + 1;
console.log(step4);

// 1 TO 100
Math.floor(Math.random() * 100) + 1;
// 1 TO 5
Math.floor(Math.random() * 5) + 1;
// 21 TO 25
Math.floor(Math.random() * 5) + 20;

// GUESSING GAME 
const max = prompt("enter the max number");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are right ! CONGRATS!!");
        break;
    }else if(guess < random){
        guess = prompt("hint : your guess is too small! try again");
    }else{
       guess = prompt("hint : your guess is too large! Please try again");
    }
}





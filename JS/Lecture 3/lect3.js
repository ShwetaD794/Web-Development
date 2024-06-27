//STRING METHODS
let msg = "    hello     ";
console.log(msg);
console.log(msg.trim());

let Name = "Shweta Dhote";
console.log(Name);
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());

// STRING METHODS WITH ARGUMENTS
let str = "ILoveCoding";
console.log(str.indexOf("Coding"));
console.log(str.indexOf("coding"));
console.log(str.indexOf("v"));

// METHOD CHIANING
let work = "   Shweta   Dhote     ";
console.log(work.toUpperCase().trim());

// SLICE METHOD 
let newStr = "ShwetaDhote";
console.log(newStr.slice(0, 3));
console.log(newStr.slice(6));
console.log(newStr.slice(5, newStr.length));
console.log(newStr.slice(-3));

// REPLACE AND REPEAT
let newMsg = "IloveCoding";
console.log(newMsg.replace("love", "do"));
console.log(newMsg.replace('I', 'U'));
console.log(newMsg.repeat(2));

// ARRAY 
let students = ['shweta', 'shreyash', 'shraddha'];
console.log(students);

let info = ["shweta", 40, 20.6];
console.log(info);
console.log(info[0][4]);
console.log(info[0].length);

// ARRAY METHODS
let cars = ["audi", "maruti", "SUV"];
console.log(cars);
cars.push("toyota");
console.log(cars);
cars.pop();
console.log(cars);
cars.unshift("ferrari");
console.log(cars);
cars.shift();
console.log(cars);
console.log(cars.indexOf("audi"));
console.log(cars.includes("audi"));

// CONCAT 
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "purple"];
let allcolors = primary.concat(secondary);
console.log(allcolors);
let colors = secondary.concat(primary);
console.log(colors);

// REVERSE 
console.log(primary.reverse());
console.log(primary);

// SLICE 
let color = ["pink", "brown", "white", "black", "maroon"]
console.log(color.slice());
console.log(color.slice(color.length-1));
console.log(color.slice(2,3));
console.log(color.slice(-2));

// SPLICE 
console.log(color.splice(3));
console.log(color);
console.log(color.splice(0,1));
console.log(color);
console.log(color.splice(0,0,"green", "blue", "red"));
console.log(color);
console.log(color.splice(1,0,"voilet"));
console.log(color);

let start = ['january', 'july', 'march', 'august'];
start.splice(0,2, 'july', 'june');
console.log(start);


// SORT 
console.log(color);
console.log(color.sort());

// TIC-TAC-TOE
let game = [ ['X', null, '0'], [null, 'X', null], ['0', null, 'X']];
console.log(game);
// game[0][1] = '0';
// console.log(game);
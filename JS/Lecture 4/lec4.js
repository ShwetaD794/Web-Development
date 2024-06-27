// // ODD AND EVEN NUMBERS 
// console.log("odd numbers : ");
// for(let i=1; i<=15; i++){
//    if(i%2 != 0){
//     console.log(i);
//    }
// }
// console.log("even numbers : ");
// for(let i=1; i<=15; i++){
//    if(i%2 == 0){
//     console.log(i);
//    }
// }

// // MULTIPLICATION TABLE OF 5
// console.log("multiplication table of 5 : ")
// for(let i=5; i<=50; i++){
//     if(i%5 == 0){
//       console.log(i);
//     }
// }

// let n = prompt("write a number");
// console.log(`mulitiplication table of ${n}`);
// for(let i=n; i<=n*10; i++){
//    if(i%n == 0){
//       console.log(i);
//    }
// }

// // NESTED FOR LOOPS
// for(let i=1; i<=3; i++){
//    console.log(`outer loop ${i}`);
//    for(let j=1; j<=3; j++){
//       console.log(j);
//    }

//    }


// // FAVOURITE MOVIE GUESS 
// let favMovie = "Titanic";
// let guess = prompt("guess my favourite movie");

// while((guess!=favMovie))
//    {
//    if(guess == "quit"){
//       console.log("you quit");
//       break;
//    }
//    console.log(alert("OOPs! you are wrong"));
//    guess = prompt("guess again");
// }
// if(guess == favMovie){
// console.log("your answer is correct");
// }

// LOOPS IN ARRAYS
// let arr = ["apple", "mango", "banana", "litchi", "grape"];
// for(let i=0; i<arr.length; i++)
// {
//    console.log(i+1,arr[i]);
// }

// LOOP WITH NESTED ARRAYS
// let heroes = [
//    ["ironman", "spiderman", "thor"],
//    ["superman", "wonder woman", "flash"]];
//    for(let i=0; i<heroes.length; i++){
//       console.log(heroes[i]);
//       for(let j=0; j<heroes[i].length; j++){
//          console.log(j,heroes[i][j]);
//       }
//    }        

// FOR-OF LOOP 
let fruits = ["apple", "mango", "banana", "litchi", "grape"];
for(fruit of fruits){
   console.log(fruit);
}

// NESTED FOR-OF LOOPS
let superheroes = [
     ["ironman", "spiderman", "thor"],
     ["superman", "wonder woman", "flash"]];

     for(list of superheroes){
      console.log(list);
      for(items of list){
         console.log(items);
     }
   }
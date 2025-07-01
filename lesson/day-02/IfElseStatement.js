const readline = require("readline-sync");

let arrivalTime = Number(readline.question("Arrival Time: "));

let isHeOnTime = arrivalTime === 7;

let myName = "Long";
if (isHeOnTime) {
  console.log("Let's talk");
  myName = "Jake";
} else {
  console.log("Write a letter");
  myName = "Joke";
}

console.log(myName);

//Ternay operator
let msg = isHeOnTime ? "Let's talk" : "Write a letter";

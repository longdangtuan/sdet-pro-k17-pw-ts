const readline = require("readline-sync");
let weight = Number(readline.question("Weight in kilograms: "));
let height = Number(readline.question("Height in meters: "));
let BMI = weight / (height * height);

//2.1, 2.3
if (BMI < 18.5) {
  console.log("Underweight");
  console.log(
    `You should increase weight from ${Math.round(18.5 - BMI)} to ${Math.round(
      24.9 - BMI
    )}`
  );
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("Normal weight");
} else if (BMI >= 25 && BMI >= 29.9) {
  console.log("Overweight");
  console.log(
    `You should decrease weight from ${Math.round(BMI - 24.9)} to ${Math.round(
      BMI - 18.5
    )}`
  );
} else {
  console.log("Obesity");
  console.log(
    `You should decrease weight from ${Math.round(BMI - 24.9)} to ${Math.round(
      BMI - 18.5
    )}`
  );
}

//2.2
let number = Number(readline.question("Number: "));
if (number % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

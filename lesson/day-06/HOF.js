/**
 * HOF: parameter - definition of ANOTHER function OR return definition of a function
 */
function greet(name) {
  console.log(`Hello, ${name}`);
}

function hof(callbackFn) {
  let name = "Teo";
  callbackFn(name);
}

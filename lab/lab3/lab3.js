// 3.1
let intArr1 = [1, 2, 3, 4, 5];
let evenNumbersInArr1 = intArr1.filter(isEvenNumber);
console.log(`Even numbers: ${evenNumbersInArr1.length}`);

let oddNumbersInArr1 = intArr1.filter(isOddNumber);
console.log(`Odd numbers: ${oddNumbersInArr1.length}`);
function isEvenNumber(number) {
  return number % 2 === 0;
}

function isOddNumber(number) {
  return number % 2 !== 0;
}

// 3.2
function maxValue(array) {
  let max = array[0];
  for (let i = 0; i <= array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

function minValue(array) {
  let min = array[0];
  for (let i = 0; i <= array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

console.log(`Minimum: ${minValue(intArr1)}`);
console.log(`Maximum: ${maxValue(intArr1)}`);

// 3.3
let intArr2 = [12, 34, 1, 16, 28];
function sortNumber(a, b) {
  return a - b;
}
let sortedAscIntArr2 = intArr2.toSorted(sortNumber);
console.log(sortedAscIntArr2);

// 3.4
let array01 = [1, 12, 16, 28, 34];
let array02 = [1, 13, 16, 27, 99];

let mergedArray = array01.concat(array02).toSorted(sortNumber);
console.log(mergedArray);

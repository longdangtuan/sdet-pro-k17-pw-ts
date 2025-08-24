const readline = require("readline-sync");
const givenString = String(
  readline.question("Please enter your desire text: ")
);

newString = givenString.replace(/[,.]/g, " ");

const splitWords = newString.split(" ");
const nonEmptyArray = splitWords.filter(function (word) {
  return word.trim() !== "";
});
console.log(nonEmptyArray);

const countedWords = {};
for (const word of nonEmptyArray) {
  const currCount = countedWords[word] ?? 0;
  countedWords[word] = currCount + 1;
}

console.log(countedWords);

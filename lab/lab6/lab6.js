const readline = require("readline-sync");
const userId = String(readline.question("Please enter user id: "));
const postId = String(readline.question("Please enter user id: "));

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function test(url) {
  fetch(url).then(getResponse).then(validateResponse);
}

function getResponse(response) {
  return response.json();
}

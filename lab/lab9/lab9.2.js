const readline = require("readline-sync");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;

console.log(USER_ENDPOINT);
console.log(POST_ENDPOINT);
app();
async function app() {
  let isPlaying = true;
  while (isPlaying) {
    printMenu();
    const userOption = getUserOption();
    console.log(`user option selected is: ${userOption}`);
    if (userOption === 1) {
      await handleGetPostContent();
    } else if (userOption === 2) {
      await handleGetAllPosts();
    } else if (userOption === 0) {
      isPlaying = false;
      console.log(`See you again!`);
    }
  }
}

function printMenu() {
  console.log(`
        === Posts application===
                1. Find a Post by User Id and Post Id
                2. Find all Posts by User Id
                0. Exit program`);
}

//getUserOption();
function getUserOption() {
  return Number(readline.question("Please select your option: "));
}

//handleGetPostContent();
async function handleGetPostContent() {
  const userId = getUserInput("User Id: ");
  const returnedData = await getAllPostForUser(userId);
  if (returnedData.hasUser) {
    const postId = getUserInput("Post Id: ");
    const targetPost = returnedData.userRelatedPosts.filter(function (post) {
      return post.id === postId;
    });
    console.log(targetPost);
  }
}

//handleGetAllPosts();
async function handleGetAllPosts() {
  const userId = getUserInput("User Id: ");
  const returnedData = await getAllPostForUser(userId);
  if (returnedData.hasUser) {
    console.log(returnedData.userRelatedPosts);
  }
}

//getAllPostForUser(1);

async function getAllPostForUser(userId) {
  const userResponse = await fetch(`${USER_ENDPOINT}/${userId}`);
  const hasUser = userResponse.ok;
  if (hasUser) {
    const postResponse = await fetch(POST_ENDPOINT);
    const jsonPostResponse = await postResponse.json();
    const userRelatedPosts = jsonPostResponse.filter(function (post) {
      return post.userId === userId;
    });
    return {
      hasUser: true,
      userRelatedPosts: userRelatedPosts,
    };
  } else {
    console.log(`User Id ${userId} is not existing`);
    return { hasUser: false };
  }
}

function getUserInput(question) {
  return Number(readline.question(question));
}

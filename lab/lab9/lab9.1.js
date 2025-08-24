const readline = require("readline-sync");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;

console.log(USER_ENDPOINT);
console.log(POST_ENDPOINT);
app();

function app() {
  let isPlaying = true;

  while (isPlaying) {
    handlePromise();

    break;
  }

  function handlePromise() {
    if (!isPlaying) return;
    printMenu();
    getUserOption()
      .then(function (userOption) {
        switch (userOption) {
          case 1:
            return handleGetPostContent();
          case 2:
            return handleGetAllPosts();
          case 0:
            isPlaying = false;
            console.log(`See you again!`);
            break;
          default:
            console.log("Invalid user option");
        }
      })
      .then(handlePromise);
  }
}

function printMenu() {
  console.log(`
        === Posts application===
                1. Find a Post by User Id and Post Id
                2. Find all Posts by User Id
                0. Exit program`);
}
function getUserOption() {
  return new Promise(function (resolve) {
    resolve(Number(readline.question("Please select your option: ")));
  });

  // return Number(readline.question("Please select your option: "));
}

function handleGetPostContent() {
  const userId = getUserInput("User Id: ");
  return _getAllPostForUser(userId).then(function (returnedData) {
    if (returnedData.hasUser) {
      const postId = getUserInput("Post Id: ");
      const targetPost = returnedData.userRelatedPosts.filter(function (post) {
        return post.id === postId;
      });
      console.log(targetPost);
    }
  });
}

function handleGetAllPosts() {
  const userId = getUserInput("User Id: ");
  return _getAllPostForUser(userId).then(function (returnedData) {
    if (returnedData.hasUser) {
      console.log(returnedData.userRelatedPosts);
    }
  });
}
function _getAllPostForUser(userId) {
  return fetch(`${USER_ENDPOINT}/${userId}`).then(function (userResponse) {
    const hasUser = userResponse.ok;
    if (hasUser) {
      return fetch(POST_ENDPOINT).then(function (response) {
        return response.json().then(function (postResponse) {
          const userRelatedPosts = postResponse.filter(function (post) {
            return post.userId === userId;
          });
          return {
            hasUser: true,
            userRelatedPosts: userRelatedPosts,
          };
        });
      });
    } else {
      console.log(`User Id ${userId} is not existing`);
      return { hasUser: false };
    }
  });
}

function getUserInput(question) {
  return Number(readline.question(question));
}

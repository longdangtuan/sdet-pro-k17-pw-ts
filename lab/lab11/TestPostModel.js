// TestPostModel.js
const RequestHandler = require("./RequestHandler");

lab11();

async function lab11() {
  const userId = 1;
  const postId = 5;

  const handler = new RequestHandler();

  const post = await handler.printTargetPost(userId, postId);
  console.log("Target Post:", post);

  const allPosts = await handler.printAllPosts(userId);
  console.log("All Posts:", allPosts);
}

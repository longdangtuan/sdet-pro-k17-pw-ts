// RequestHandler.js
const Post = require("./Post");

class RequestHandler {
  async printTargetPost(userId, postId) {
    const allPosts = await this._getAllPosts(userId);
    const target = allPosts.find((post) => post.id === postId);
    if (target) {
      let postModel = new Post();
      postModel.userId = target.userId;
      postModel.id = target.id;
      postModel.title = target.title;
      postModel.body = target.body;

      return {
        userId: postModel.userId,
        id: postModel.id,
        title: postModel.title,
        body: postModel.body,
      };
    } else {
      console.log(
        `Target post user id ${userId}, post id ${postId} is not existing`
      );
      return null;
    }
  }

  async printAllPosts(userId) {
    const allPosts = await this._getAllPosts(userId);
    return allPosts.map((post) => {
      let postModel = new Post();
      postModel.userId = post.userId;
      postModel.id = post.id;
      postModel.title = post.title;
      postModel.body = post.body;

      return {
        userId: postModel.userId,
        id: postModel.id,
        title: postModel.title,
        body: postModel.body,
      };
    });
  }

  async _getAllPosts(userId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const hasUser = res.ok;
    if (hasUser) {
      const data = await res.json();
      return data;
    } else {
      console.log(`User Id ${userId} is not existing`);
    }
  }
}

module.exports = RequestHandler;

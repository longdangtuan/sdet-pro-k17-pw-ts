class Post {
  constructor(userId, id, title, body) {
    this._userId = userId;
    this._id = id;
    this._title = title;
    this._body = body;
  }

  set userId(value) {
    this._userId = value;
  }
  get userId() {
    return this._userId;
  }

  set id(value) {
    this._id = value;
  }
  get id() {
    return this._id;
  }

  set title(value) {
    this._title = value;
  }
  get title() {
    return this._title;
  }

  set body(value) {
    this._body = value;
  }
  get body() {
    return this._body;
  }
}
module.exports = Post;

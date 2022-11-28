const pool = require("../utils/pool");

class UsersRepo {
  constructor() {}

  getUsers() {
    return pool.query("SELECT * FROM users");
  }
  getComment() {
    return pool.query("SELECT * FROM comments");
  }

  createUser({ username, password, haircolor }) {
    return pool.query(
      "INSERT INTO users ( username, password, haircolor) VALUES ($1, $2, $3)",
      [username, password, haircolor]
    );
  }
  addComment({ comment_text, user_id }) {
    return pool.query(
      "INSERT INTO comments ( comment_text, user_id) VALUES ($2, $3)",
      [comment_text, user_id]
    );
  }

  editUser({ id, username, password, haircolor }) {
    return pool.query(
      "UPDATE users set username = $2, password = $3, haircolor = $4 WHERE id = $1",
      [id, username, password, haircolor]
    );
  }

  deleteUser({ id }) {
    return pool.query("DELETE FROM users WHERE id = $1", [id]);
  }
  deleteComment({ id }) {
    return pool.query("DELETE FROM users WHERE id = $1", [id]);
  }
}

module.exports = UsersRepo;

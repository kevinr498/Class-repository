const pool = require("../utils/pool");

class UsersRepo {
  constructor() {}

  getUsers() {
    return pool.query("SELECT * FROM users");
  }
  getComment() {
    return pool.query("SELECT * FROM comments");
  }

  createUser({ id, username, password, haircolor }) {
    return pool.query(
      "INSERT INTO users (id, username, password, haircolor) VALUES ($1, $2, $3, $4)",
      [id, username, password, haircolor]
    );
  }
  addComment({ id, comment_text, user_id }) {
    return pool.query(
      "INSERT INTO comments (id, comment_text, user_id) VALUES ($1, $2, $3)",
      [id, comment_text, user_id]
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

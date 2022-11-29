const pool = require("../utils/pool");

class CommentsRepo {
  constructor() {}

  getComments() {
    return pool.query("SELECT * FROM comments");
  }

  createComment({ comment_text, user_id }) {
    return pool.query(
      "INSERT INTO comments (comment_text, user_id) VALUES ($1, $2)",
      [comment_text, user_id]
    );
  }

  getComment(commentId) {
    return pool.query(
      "SELECT u.username, c.comment_text FROM users as u JOIN comments as c ON u.id = c.user_id WHERE c.id = $1",
      [commentId]
    );
  }
}

module.exports = CommentsRepo;

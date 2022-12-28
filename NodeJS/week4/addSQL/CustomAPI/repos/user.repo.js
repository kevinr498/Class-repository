import pool from "../utils/pool.js";

class userRepo {
  constructor() {}

  getUsers() {
    return pool.query("SELECT * FROM users");
  }

  createUser({ username }) {
    return pool.query("INSERT INTO users (username) VALUES ($1)", [username]);
  }

  deleteUser({ id }) {
    return pool.query("DELETE FROM users WHERE id = $1", [id]);
  }

  getUser(id) {
    return pool.query("SELECT name FROM users WHERE id = $1", [id]);
  }
}

export default userRepo;

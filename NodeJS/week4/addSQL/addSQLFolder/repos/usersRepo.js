const pool = require("../utils/pool");

class UsersRepo {
  constructor() {}

  getInput() {
    return pool.query("SELECT * FROM inputs");
  }

  createInput({ id, type, color, quantity }) {
    return pool.query(
      "INSERT INTO inputs (id, type, color, quantity) VALUES ($1, $2, $3, $4)",
      [id, type, color, quantity]
    );
  }

  editInput({ id, type, color, quantity }) {
    return pool.query(
      "UPDATE inputs set type = $2, color = $3, quantity = $4 WHERE id = $1",
      [id, type, color, quantity]
    );
  }

  inputDelete({ id }) {
    return pool.query("DELETE FROM inputs WHERE id = $1", [id]);
  }
}

module.exports = UsersRepo;

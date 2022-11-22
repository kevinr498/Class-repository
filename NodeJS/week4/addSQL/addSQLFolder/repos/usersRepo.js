const pool = require("../utils/pool");

class UsersRepo {
  constructor() {}

  getInput() {
    return pool.query("SELECT * FROM inputs");
  }

  createInput({ ids, type, color, quantity }) {
    return pool.query(
      "INSERT INTO inputs (ids, type, color, quantity) VALUES ($1, $2, $3, $4)",
      [ids, type, color, quantity]
    );
  }

  editInput({ ids, type, color, quantity }) {
    return pool.query(
      "UPDATE inputs set type = $2, color = $3, quantity = $4 WHERE ids = $1",
      [ids, type, color, quantity]
    );
  }

  inputDelete({ id }) {
    return pool.query("DELETE FROM inputs WHERE ids = $1", [ids]);
  }
}

module.exports = UsersRepo;

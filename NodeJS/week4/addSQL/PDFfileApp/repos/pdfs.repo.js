const pool = require("../utils/pool");

class PdfRepo {
  constructor() {}

  getPDFs() {
    return pool.query("SELECT * FROM pdfs");
  }

  createPDFs({ name }) {
    console.log(name, "hello repo");
    return pool.query("INSERT INTO pdfs (name) VALUES ($1)", [name]);
  }

  deletePDF({ id }) {
    return pool.query("DELETE FROM pdfs WHERE id = $1", [id]);
  }

  getPdf(id) {
    return pool.query("SELECT name FROM pdfs WHERE id = $1", [id]);
  }
}

module.exports = PdfRepo;

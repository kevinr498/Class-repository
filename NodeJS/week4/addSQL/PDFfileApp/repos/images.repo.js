const pool = require("../utils/pool");

class ImagesRepo {
  constructor() {}

  getImages() {
    return pool.query("SELECT * FROM pdfs");
  }
}

module.exports = ImagesRepo;

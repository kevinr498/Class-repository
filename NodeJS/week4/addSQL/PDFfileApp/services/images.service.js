const Images = require("../models/images");
const ImagesRepo = require("../repos/Images.repo");

class ImagesServices {
  constructor() {
    this.imagesRepo = new ImagesRepo();
  }

  async getImages() {
    const data = await this.imagesRepo.getImages();
    return data.rows;
  }
}

module.exports = ImagesServices;

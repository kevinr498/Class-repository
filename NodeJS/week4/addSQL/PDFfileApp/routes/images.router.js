const express = require("express");
const fileUpload = require("express-fileupload");
const ImagesController = require("../controllers/images.controller");

const imagesRouter = express.Router();
const imagesController = new ImagesController();

imagesRouter.post(
  "/images",
  fileUpload({ createParentPath: true }),
  (req, res) => imagesController.createImage(req, res)
);

module.exports = imagesRouter;

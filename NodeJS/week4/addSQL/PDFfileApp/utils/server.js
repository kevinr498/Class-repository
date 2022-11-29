// https://expressjs.com/en/starter/installing.html

// https://postgresapp.com/
const express = require("express");

const bodyParser = require("body-parser");
const userRouter = require("../routes/user.router");
const commentRouter = require("../routes/comments.router");
const imagesRouter = require("../routes/images.router");
function createServer() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(express.static("client"));
  app.use(express.static("images"));

  app.use(userRouter);
  app.use(commentRouter);
  app.use(imagesRouter);

  return app;
}

module.exports = createServer;

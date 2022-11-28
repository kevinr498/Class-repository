// https://expressjs.com/en/starter/installing.html

// https://postgresapp.com/
const express = require("express");

const bodyParser = require("body-parser");
const userRouter = require("../routes/userRouter.js");

function createServer() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(userRouter);

  return app;
}

module.exports = createServer;

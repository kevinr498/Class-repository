// https://expressjs.com/en/starter/installing.html
import express from "express";
import bodyParser from "body-parser";

// const pdfRouter = require("../routes/pdf.router");
// https://postgresapp.com/

function createServer() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // app.use(express.static("client"));
  // app.use(express.static("images"));

  // app.use(userRouter);

  return app;
}

export default createServer;

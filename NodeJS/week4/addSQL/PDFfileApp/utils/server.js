// https://expressjs.com/en/starter/installing.html

// https://postgresapp.com/
const express = require("express");

const bodyParser = require("body-parser");
const pdfRouter = require("../routes/pdf.router");
function createServer() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(express.static("client"));
  app.use(express.static("pdfs"));

  app.use(pdfRouter);

  return app;
}

module.exports = createServer;

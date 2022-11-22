// https://expressjs.com/en/starter/installing.html

// https://postgresapp.com/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const userRouter = require("./routes/userRouter");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRouter);

const port = 3002;
//  https://expressjs.com/en/resources/middleware/body-parser.html

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Express Server listening on port ${port}`);
});

const path = require("path");
const createServer = require("./utils/server");
const port = 3002;
//  https://expressjs.com/en/resources/middleware/body-parser.html

const app = createServer();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});

app.listen(port, () => {
  console.log(`Express Server listening on port ${port}`);
});

import startApolloServer from "./utils/startApolloServer.js";
import resolvers from "./graphql/resolvers/index.js";
import typeDefs from "./graphql/resolvers/types/index.js";
import createServer from "./utils/server.js";

startApolloServer(typeDefs, resolvers);
const port = 3002;

//  https://expressjs.com/en/resources/middleware/body-parser.html

const app = createServer();

app.listen(port, () => {
  console.log(`Express Server listening on port ${port}`);
});

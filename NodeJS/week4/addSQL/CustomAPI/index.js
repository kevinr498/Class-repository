import startApolloServer from "./utils/startApolloServer.js";
import resolvers from "./graphql/resolvers/index.js";
import typeDefs from "./graphql/resolvers/types/index.js";

startApolloServer(typeDefs, resolvers);

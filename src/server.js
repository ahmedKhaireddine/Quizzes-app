import express from "express";
import { ApolloServer, gql } from 'apollo-server-express';
import config from "./config";

(async () => {
  const app = express();

  const typeDefs = gql`
  type Query {
    hello: String
  }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(config.port, () => {
    console.log(`🚀  Server ready at http://localhost:${config.port}${ server.graphqlPath }`);
  });
})();
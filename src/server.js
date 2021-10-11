import express from "express";
import { ApolloServer, gql } from 'apollo-server-express';
import databaseConnect from "./database/connect";
import { typeDefs, resolvers } from "./graphql";
import config from "./config";

(async () => {
  const { PORT } = config;

  const app = express();

  await databaseConnect();

  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}${ server.graphqlPath }`);
  });
})();
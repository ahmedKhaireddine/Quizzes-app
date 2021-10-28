import express from "express";
import { ApolloServer} from 'apollo-server-express';
import databaseConnect from "./database/connect";
import { typeDefs, resolvers } from "./graphql";
import config from "./config";

(async () => {
  const { PORT } = config;

  const app = express();

  await databaseConnect();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: error => {
      console.log({
        code : error.extensions.code ,
        message: error.message
      })

      return { message: "Internal Server Error." }
    }
   });

  await server.start();

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`🚀  Server ready at http://localhost:${PORT}${ server.graphqlPath }`);
  });
})();
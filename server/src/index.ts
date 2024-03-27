const { ApolloServer, gql } = require("apollo-server-express");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const { makeExecutableSchema } = require("@graphql-tools/schema");
import mongoose from "mongoose";
const express = require("express");
require("dotenv").config();
require("./config");
import jwt from "jsonwebtoken";
mongoose.set("strictQuery", false);
const User = require("../model/User");

const cors = require("cors");
const http = require("http");
const io = require("socket.io");

const typeDefs = require("./graphQL/schema");
const resolvers = require("./graphQL/resolvers");

const SECRET_KEY = process.env.SECRET_KEY as unknown as string;

interface JwtPayloadType {
  id: string;
  error: any;
}
const start = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    context: async ({ req, res }: any) => {
      const auth = req ? req.headers.authorization : null;

      if (auth && auth.startsWith("Bearer ")) {
        const decodedToken = jwt.verify(
          auth.substring(7),
          SECRET_KEY
        ) as JwtPayloadType;
        const currentUser = await User.findById(decodedToken.id).populate(
          "friends"
        );
        return { currentUser };
      }
    },
  });

  async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
  }

  startServer();

  const PORT = process.env.PORT || 4000;

  httpServer.listen(PORT, () => {
    console.log(
      `Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

start();

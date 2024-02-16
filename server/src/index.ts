const { ApolloServer, gql } = require("apollo-server-express");
const { startStandaloneServer } = require("@apollo/server/standalone");
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
// let mongoose = require('mongoose')
import mongoose from "mongoose";
const express = require("express");
require("dotenv").config();
require("./config");

const { v1: uuid } = require("uuid");
const { GraphQLError } = require("graphql");
const Dog = require("../model/Dog");
const Age = require("../model/Age");
mongoose.set("strictQuery", false);

const SECRET_KEY = process.env.SECRET_KEY as unknown as string;
//mock user data - this will be the data on pose
const users = [
  { id: "1", username: "user1", password: "password1" },
  { id: "2", username: "user2", password: "password2" },
];
const typeDefs = `

  type Dog {
    id: ID
    name: String
    breed:String
    age:String
    personality: String
   
  }

  type Age {
    id: ID
    age: String
   
  }
 
  type Query {
    hello: String
    currentUser: User
    allDogs: [Dog!]!
    allAges: [Age!]!
  }

  type User {
    id: ID!
    username: String!
  }

  type Mutation {
    addDog(
      name: String!
      breed:String!
      age:Int!
      personality: String!
      
    ): Dog
    addAge(
      age: Int! 
    ): Age

    login(
      username: String!, 
      password: String!
      ): String
  }
`;

const resolvers = {
  Query: {
    allDogs: async (_root: any, _args: any) => Dog.find({}),
    allAges: async (_root: any, _args: any) => Age.find({}),
    hello: () => "Hello world!",
    currentUser: (parent: any, args: any, context: any) => {
      // Check if user is authenticated
      if (context.user) {
        return context.user;
      } else {
        return null;
      }
    },
  },
  Mutation: {
    addDog: async (_root: any, args: any) => {
      const dog = new Dog({ ...args });
      return dog.save();
    },
    addAge: async (_root: any, args: any) => {
      const age = new Age({ ...args });
      return age.save();
    },
    login: (
      parent: any,
      { username, password }: { username: string; password: string },
      context: any
    ) => {
      // Validate user credentials (you should use a proper authentication mechanism)
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        // Generate a JWT token
        const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
          expiresIn: "1h",
        });

        // Set token in response header
        context.res.cookie("token", token, { httpOnly: true });
        return token;
      } else {
        throw new Error("Invalid username or password");
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }: any) => {
    // Get token from request cookies
    const token = req.cookies.token || "";

    try {
      // Verify token
      const decoded: any = jwt.verify(token, SECRET_KEY);
      // Attach user data to the context
      const user = users.find((user) => user.id === decoded.userId);
      return { user, req, res };
    } catch (error) {
      // Token verification failed, user is not authenticated
      return { req, res };
    }
  },
});

const app = express();
app.use(cookieParser());

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});

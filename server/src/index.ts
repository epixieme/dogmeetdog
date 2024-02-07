const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
// let mongoose = require('mongoose')
import mongoose from "mongoose";

require("dotenv").config();
require("./config");
const { v1: uuid } = require("uuid");
const { GraphQLError } = require("graphql");
const Dog = require("../model/Dog");
const Age = require("../model/Age");
mongoose.set("strictQuery", false);


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
    allDogs: [Dog!]!
    allAges: [Age!]!
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
  }
`;

const resolvers = {
  Query: {
    allDogs: async (_root: any, _args: any) => Dog.find({}),
    allAges: async (_root: any, _args: any) => Age.find({}),
  },
  Mutation: {
    addDog: async (_root: any, args:any) => {
      const dog = new Dog({ ...args })
      return dog.save()
    },
    addAge: async (_root: any, args:any) => {
      const age = new Age({ ...args })
      return age.save()
    }
  },
  }

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }: any) => {
  console.log(`Server ready at ${url}`);
});

const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
// let mongoose = require('mongoose')
import mongoose from "mongoose";

require("dotenv").config();
require("./config");
const { v1: uuid } = require("uuid");
const { GraphQLError } = require("graphql");
const Dog = require("../model/Dog");
mongoose.set("strictQuery", false);


const typeDefs = `


  type Dog {
    id: ID
    name: String
    breed:String
    age:String
    personality: String
   
  }
 
  type Query {
    allDogs: [Dog!]!
  }

  type Mutation {
    addDog(
      name: String!
      breed:String!
      age:String!
      personality: String!
      
    ): Dog
  }
`;

const resolvers = {
  Query: {
    allDogs: async (_root: any, _args: any) => Dog.find({}),
    
  },
  Mutation: {
    addDog: async (_root: any, args:any) => {
      const dog = new Dog({ ...args })
      return dog.save()
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

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
const User = require("../model/User")
mongoose.set("strictQuery", false);

const SECRET_KEY = process.env.SECRET_KEY as unknown as string;
//mock user data - this will be the data on pose
// const users = [
//   { id: "1", username: "user1@user.com", password: "password1" },
//   { id: "2", username: "user2", password: "password2" },
// ];
const typeDefs = `

type User {
  username: String!
  friends: [Dog!]!
  id: ID!
}

type Token {
  value: String!
}

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
    addAsFriend(
      name: String!
    ): User
    addDog(
      name: String!
      breed:String!
      age:Int!
      personality: String!
      
    ): Dog
    addAge(
      age: Int! 
    ): Age
  
      createUser(
        username: String!
        password: String!
        
      ): User

      login(
        username: String!
        password: String!
      ): Token
  }
`;
interface JwtPayloadType {
  id: string
  error:any
}
const resolvers = {
  
  Query: {
    allDogs: async (_root: any, _args: any) => Dog.find({}),
    allAges: async (_root: any, _args: any) => Age.find({}),
    hello: () => "Hello world!",
    currentUser: (_root:any, args:any, context:any) => {
      return context.currentUser
    }
  },
  Mutation: {
    addAsFriend: async (_root:any, args:any, { currentUser }:any) => {
      const isFriend = (dog:any) => 
        currentUser.friends.map((f: { _id: { toString: () => any; }; }) => f._id.toString()).includes(dog._id.toString())
  
      if (!currentUser) {
        throw new GraphQLError('wrong credentials', {
          extensions: { code: 'BAD_USER_INPUT' }
        }) 
      }
  
      const dog = await Dog.findOne({ name: args.name })
      if ( !isFriend(dog) ) {
        currentUser.friends = currentUser.friends.concat(dog)
      }
  
      await currentUser.save()
  
      return currentUser
    },
    addDog: async (_root:any, args:any, context:any) => {
      const dog = new Dog({ ...args })
      const currentUser = context.currentUser

      if (!currentUser) {
        throw new GraphQLError('not authenticated', {
          extensions: {
            code: 'BAD_USER_INPUT',
          }
        })
      }

      try {
        await dog.save()
        currentUser.friends = currentUser.friends.concat(dog)
        await currentUser.save()
      } catch (error) {
        throw new GraphQLError('Saving user failed', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name,
            error
          }
        })
      }
      
      return dog
    },
    
    addAge: async (_root: any, args: any) => {
      const age = new Age({ ...args });
      return age.save();
    },

    createUser: async (_root:any, args:any) => {
      const user = new User({ username: args.username, password:args.password })
      return user.save()
        .catch((error: any) => {
          throw new GraphQLError('Creating the user failed', {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.username,
              error
            }
          })
        })
    },
    login: async (_root:any, args:any) => {
      const user = await User.findOne({ username: args.username })
  
      if ( !user || args.password !== 'secret' ) {
        throw new GraphQLError('wrong credentials', {
          extensions: {
            code: 'BAD_USER_INPUT'
          }
        })        
      }
  
      const userForToken = {
        username: user.username,
        id: user._id,
      }
  
      return { value: jwt.sign(userForToken, SECRET_KEY) }
    },
   
    // login: (
    //   parent: any,
    //   { username, password }: { username: string; password: string },
    //   context: any
    // ) => {
    //   // Validate user credentials (you should use a proper authentication mechanism)
    //   const user = users.find(
    //     (user) => user.username === username && user.password === password
    //   );

    //   if (user) {
    //     // Generate a JWT token
    //     const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
    //       expiresIn: "1h",
    //     });

    //     // Set token in response header
    //     context.res.cookie("token", token, { httpOnly: true });
    //     return token;
    //   } else {
    //     throw new Error("Invalid username or password");
    //   }
    // },


  },
};




const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res}:any) => {
    const auth = req ? req.headers.authorization : null
   
    if (auth && auth.startsWith('Bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), SECRET_KEY
      ) as JwtPayloadType
      const currentUser = await User
        .findById(decodedToken.id).populate('friends')
      return { currentUser }
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

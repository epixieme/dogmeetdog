const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
// let mongoose = require('mongoose')
import mongoose from 'mongoose'


require('dotenv').config()
require('./config');
const { v1: uuid } = require('uuid')
const { GraphQLError } = require('graphql')

const Dog = require('../model/Dog')

mongoose.set('strictQuery', false)

require('dotenv').config()



const typeDefs = `
type Address {
  street: String
  city: String

}

  type Dog {
    id: ID
    name: String
    breed:String
    age:String
    personality: String
    address: Address
  }

  input DogsInputFilter {
    id:ID
    breed:String
  }

  enum YesNo {
    YES
    NO
  }
 
  type Query {
    dogCount: Int!
    allDogs(street: YesNo): [Dog!]!
    findDog(breed: String!): Dog
    findDogs(input: DogsInputFilter):[Dog]
  }

  type Mutation {
    addDog(
      name: String
      breed:String
      age:String
      personality: String
      
    ): Dog
    editStreet (
      name: String!
      street: String!
    ): Dog
  }
`

const resolvers = {

  Query: {
    dogCount: () =>async()=> Dog.collection.countDocuments(),
    allDogs: async (_root:any, args:any) => {
      if (!args.breed) {
        return Dog.find({})
      }
      return Dog.find({ phone: { $exists: args.breed === 'YES' } })
  }},
  Dog: {
    address: (root:any) => {
      return {
        street: root.street,
        city: root.city
      }
    }
  },
  Mutation: {
    addDog: async (_root:any, args:any) => {
      const dog = new Dog({ ...args })
     
      try {
        await dog.save()
      } catch (error) {
        throw new GraphQLError('Saving person failed', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name,
            error
          }
        })
      }

      return Dog
    },
    editStreet: async (_root:any, args:any) => {
      const dog = await Dog.findOne({ name: args.name })
      dog.street = args.street
      try {
        await dog.save()
      } catch (error) {
        throw new GraphQLError('Saving number failed', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name,
            error
          }
        })
      }

      return dog
    }
}
    
  }


const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }:any) => {
  console.log(`Server ready at ${url}`)
})
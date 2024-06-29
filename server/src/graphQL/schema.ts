const typeDefs = `
type File {
  url: String!
}

type User {
  id: ID!
  name: String!
  breed:String!
  age:Int!
  personality: String!
  email: String!
}

type Token {
  value: String!
}
  
type Age {
  id: ID!
  age: Int!
}
  
type Breed {
  id: ID!
  breed: String!
}
  
type Personality {
  id:ID!
  personality: String!
}

type LoginResponse {
  value: String! # The token
  message: String # A success message
}
  
type Query {
  _empty: String
  currentUser: User
  allUsers: [User!]!
  allAges: [Age!]!
  allBreeds: [Breed!]!
  allPersonalityTypes: [Personality!]!
}

type Mutation {
uploadFile(file: Upload!): File!

  addAsFriend(
    name: String!
    ): User
  
    addAge(
      age: Int! 
    ): Age

    addBreed(
      breed: String! 
    ): Breed

    addPersonality(
      personality:String!
    ): Personality

    createUser(
      name: String!
      breed:String!
      age:String!
      personality: String!
      email: String!
      password: String!
      confirmPassword: String!
      ): User
      

      
    loginUser(
      email: String!
      password: String!
      ): LoginResponse
  }
`;

module.exports = typeDefs;

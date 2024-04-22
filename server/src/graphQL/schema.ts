const typeDefs = `
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
  
type Query {
  currentUser: User
  allUsers: [User!]!
  allAges: [Age!]!
  allBreeds: [Breed!]!
  allPersonalityTypes: [Personality!]!
}

type Mutation {
  
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
      ): Token
  }
`;

module.exports = typeDefs;

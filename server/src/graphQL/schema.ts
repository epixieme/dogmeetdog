const typeDefs = `

type User {
  email: String!
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
    email: String!
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
       email: String!
        password: String!
        
      ): User

      loginUser(
        email: String!
        password: String!
      ): Token
  }
`;

module.exports = typeDefs;

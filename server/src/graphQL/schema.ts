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
    id: ID!
    age: String!
   
  }

  type Breed {
    id: ID!
    breed: String!
  }

  input BreedInput {
    id: ID!
    breed: String!
  }

  input AgeInput {
    id: ID!
    age: String!
  }
  type DogDetails{
    id:ID!
    ages:[Age!]!
    breeds:[Breed!]!

  }

  type Query {
    hello: String
    currentUser: User
    allDogs: [Dog!]!
    allAges: [Age!]!
    allBreeds: [Breed!]!
    dogDetails:[DogDetails!]!
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
    addBreed(
      breed: String! 
    ): Breed

    addDogDetails(breeds: [BreedInput], ages: [AgeInput]): DogDetails
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
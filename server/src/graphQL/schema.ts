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
    age:Int
    personality: String
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
    currentUser: User
    allDogs: [Dog!]!
    allAges: [Age!]!
    allBreeds: [Breed!]!
    allPersonalityTypes: [Personality!]!
    dogDetails:[DogDetails!]!
  }

  type User {
    id: ID!
    name: String!
    breed:String!
    age:Int!
    personality: String!
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

    addPersonality(
      personality:String!
    ): Personality

    addDogDetails(breeds: [BreedInput], ages: [AgeInput]): DogDetails

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

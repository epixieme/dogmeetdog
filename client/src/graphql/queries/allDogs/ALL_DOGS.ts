import { gql } from "@apollo/client";

const ALL_DOGS = gql`
  query{
    allDogs {
      name
      breed
      age
      personality
    }
  }
`
export default ALL_DOGS;
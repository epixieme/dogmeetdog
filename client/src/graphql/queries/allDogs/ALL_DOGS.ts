import { gql } from "@apollo/client";

const ALL_DOGS = gql`
  query{
    allDogs {
      name
      description
      likes
    }
  }
`
export default ALL_DOGS;
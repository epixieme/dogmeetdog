import { gql } from "@apollo/client";

const ALL_DOGS = gql`
  query{
    allDogs {
      name
      description
      imageUrl
      likes
    }
  }
`
export default ALL_DOGS;
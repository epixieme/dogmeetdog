import { gql } from "@apollo/client";

const FIND_DOG_BY_NAME = gql`
  query findDogByName($nameToSearch: String!) {
    findDog(name: $nameToSearch) {
      id
      name
      description
      imageUrl
      likes
    }
  }
`

export default FIND_DOG_BY_NAME

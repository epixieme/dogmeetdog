import { gql } from "@apollo/client";

const FIND_DOGS = gql`
  query findDogByName($nameToSearch: String!) {
    findDog(name: $nameToSearch) {
      id
      name
      description
      likes
    }
  }
`

export default FIND_DOGS




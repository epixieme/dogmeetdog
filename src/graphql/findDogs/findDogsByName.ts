import { gql } from "@apollo/client";

const FIND_DOGS = gql`
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

export default FIND_DOGS


query GetAlbumsByIds {
  albums (ids: ["1", "4", "5", "6", "8"]) {
    title
    genre
    artist {
      name
    }
  }
}
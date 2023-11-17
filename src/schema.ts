import { gql } from "@apollo/client";

const ALL_DOGS = gql`
  query {
    allDogs {
      description
      id
      likes
      name
    }
  }
`;

export default ALL_DOGS;

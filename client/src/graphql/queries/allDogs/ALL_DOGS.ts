import { gql } from "@apollo/client";

const ALL_DOGS = gql`
  query AllDogs {
    allDogs {
      id
      name
      breed
      age
      personality
    }
  }
`;
export default ALL_DOGS;

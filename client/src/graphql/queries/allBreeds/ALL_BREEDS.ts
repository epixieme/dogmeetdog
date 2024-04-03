import { gql } from "@apollo/client";

const ALL_BREEDS = gql`
  query AllBreeds {
    allBreeds {
      breed
    }
  }
`;
export default ALL_BREEDS;

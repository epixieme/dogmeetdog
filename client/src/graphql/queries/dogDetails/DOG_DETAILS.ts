import { gql } from "@apollo/client";

const Dog_Details = gql`
  query DogDetails {
    allAges {
      age
    }
    allBreeds {
      breed
    }
  }
`;
export default Dog_Details;

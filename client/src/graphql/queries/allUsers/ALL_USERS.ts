import { gql } from "@apollo/client";

const ALL_USERS = gql`
  query AllUsers {
    allUsers {
      id
      name
      breed
      age
      personality
    }
  }
`;
export default ALL_USERS;

import { gql } from "@apollo/client";

const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      name
      breed
      age
      personality
      email
    }
  }
`;
export default CURRENT_USER;

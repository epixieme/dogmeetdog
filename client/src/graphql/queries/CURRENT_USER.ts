import { gql } from "@apollo/client";

const CURRENT_USER=gql`
query CurrentUser {
    currentUser {
     email
    }
  }
`
export default CURRENT_USER
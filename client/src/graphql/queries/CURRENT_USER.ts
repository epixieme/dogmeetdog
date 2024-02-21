import { gql } from "@apollo/client";

const CURRENT_USER=gql`
query CurrentUser {
    currentUser {
      username
    }
  }
`
export default CURRENT_USER
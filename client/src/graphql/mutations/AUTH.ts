import { gql } from "@apollo/client"

const AUTH = gql`

mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      value
    }
  }

`

export default AUTH
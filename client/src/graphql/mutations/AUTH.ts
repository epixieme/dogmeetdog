import { gql } from "@apollo/client"

const AUTH = gql`

mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      value
    }
  }

`

export default AUTH
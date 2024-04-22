import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $breed: String!
    $age: String!
    $personality: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    createUser(
      name: $name
      breed: $breed
      age: $age
      personality: $personality
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      email
      id
      name
      breed
      age
      personality
    }
  }
`;
export default CREATE_USER;

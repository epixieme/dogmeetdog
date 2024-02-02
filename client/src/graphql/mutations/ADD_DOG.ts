import { gql } from "@apollo/client";

const ADD_DOG = gql`
mutation AddDog($name: String!, $breed:String!, $age:String!, $personality: String!) {
  addDog(name:$name, breed:$breed, age:$age, personality:$personality) {
    name
    breed
    age
    personality
  }
}
`
export default ADD_DOG 



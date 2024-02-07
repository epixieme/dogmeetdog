import { gql } from "@apollo/client";

const ADD_AGE = gql`
mutation AddAge($age:Int!) {
  addAge(age:$age) {
    age
  
  }
}
`
export default ADD_AGE



import { gql } from "@apollo/client";

const ALL_AGES = gql`
query AllAges {
  allAges {
    age
  }
}
`
export default ALL_AGES;
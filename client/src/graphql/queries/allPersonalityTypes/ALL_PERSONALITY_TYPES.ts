import { gql } from "@apollo/client";

const ALL_PERSONALITY_TYPES = gql`
  query AllPersonalityTypes {
    allPersonalityTypes {
      personality
    }
  }
`;
export default ALL_PERSONALITY_TYPES;

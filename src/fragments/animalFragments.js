import { gql } from "@apollo/client";

export const ANIMAL_FRAGMENT = gql`
  fragment animalFields on Animal {
    id
    title
    description
    image
  }
`;

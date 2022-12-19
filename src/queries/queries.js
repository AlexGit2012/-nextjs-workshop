import { gql } from "@apollo/client";
import { ANIMAL_FRAGMENT } from "../fragments/animalFragments";

export const GET_ALL_ANIMALS = gql`
  ${ANIMAL_FRAGMENT}
  query GetAllAnimals {
    animals {
      ...animalFields
    }
  }
`;

export const GET_ANIMAL = gql`
  ${ANIMAL_FRAGMENT}
  query GetAnimal($title: String!) {
    animal(title: $title) {
      ...animalFields
    }
  }
`;

import { gql } from "../deps.ts";

export const typeDefs = gql`
  type Query {
    hello: String
    test: String
    user: [User]
    allDinosaur: [Dinosaur]
  }

  type User {
    name: String
  }

  type Dinosaur {
    name: String
    description: String
  }
`;

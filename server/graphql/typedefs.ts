import { gql } from "../deps.ts";

export const typeDefs = gql`
  type Query {
    hello: String
    test: String
    user: [User]
    post:[Post]
  }

  type User {
    name: String
    age: String
    post: Post
  }

  type Post {
    title: String
    description: String
  }
`;

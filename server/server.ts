import { gql, GraphQLHTTP, makeExecutableSchema, Server } from "./deps.ts";

const Dinosaur = `
type Dinosaur {
  name: String
  description: String
}`;

const typeDefs = gql`
  type Query {
    hello: String
    test: String
    allDinosaur: [Dinosaur]
  }
  ${Dinosaur}
`;

const DinoResolver = {
  allDinosaur: () => [
    { name: "dino1", description: "desc1" },
    { name: "dino2", description: "desc2" },
  ],
};

const resolvers = {
  Query: {
    hello: () => `Hello, World!`,
    test: () => `テストです`,
    ...DinoResolver,
  },
};

const schema = makeExecutableSchema({ resolvers, typeDefs });

const server = new Server({
  handler: async (req) => {
    const { pathname } = new URL(req.url);
    return pathname === "/graphql"
      ? await GraphQLHTTP<Request>({ schema, graphiql: true })(req)
      : new Response("Not Found", { status: 404 });
  },
  port: 8000,
});

server.listenAndServe();

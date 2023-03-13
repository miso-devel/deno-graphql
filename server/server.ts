import { GraphQLHTTP, makeExecutableSchema, serve } from "./deps.ts";
import { typeDefs } from "./graphql/typedefs.ts";
import { resolvers } from "./graphql/resolvers.ts";

const schema = makeExecutableSchema({ resolvers, typeDefs });
serve(GraphQLHTTP({ schema, graphiql: true }), { port: 8000 });

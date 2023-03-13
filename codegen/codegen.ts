import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  generates: {
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;

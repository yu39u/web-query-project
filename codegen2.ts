
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/modules/*/schema.graphql",
  documents: "src/pages/**/*.{ts,tsx}",
  generates: {
    "src/graphql/__generated__": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;

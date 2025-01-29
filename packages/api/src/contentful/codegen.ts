import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env.CONTENTFUL_GRAPHQL_URL,
  documents: ["./src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/contentful/graphql/__generated__/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;

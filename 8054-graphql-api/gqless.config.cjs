/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  endpoint: "/api/graphql",
  enumsAsStrings: false,
  react: true,
  scalars: { DateTime: "string" },
  preImport: "",
  introspection: {
    endpoint: "http://localhost:20002",
    headers: {},
  },
  destination: "./src/gqless/index.ts",
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;

module.exports = {
  root: true,
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
  },
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
};

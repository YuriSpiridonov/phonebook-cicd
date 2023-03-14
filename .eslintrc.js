/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": [
      "error",
      "unix", // 'windows'
    ],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": 0,
    "no-unused-vars": "off",
  },
};

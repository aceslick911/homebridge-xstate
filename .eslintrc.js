module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
  },
  plugins: ["@typescript-eslint"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    HistoryService: true,
    Characteristic: true,
    Service: true,
  },
  rules: {},
};

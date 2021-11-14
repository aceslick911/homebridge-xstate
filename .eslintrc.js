module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
  },
  plugins: ["@typescript-eslint", "no-autofix"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    HistoryService: true,
    Characteristic: true,
    Service: true,
  },
  rules: {
    "global-require": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-fallthrough": "off",
    "no-unreachable": "off",
    "no-empty": "off",
    "no-console": "off",
    quotes: "off",
    "brace-style": "off",
    semi: "off",
    eqeqeq: "off",
    "no-extra-semi": "warn",
    "dot-notation": "warn",
    "prefer-template": "error",
    "no-autofix/prefer-const": "warn",
    "no-unused-private-class-members": "off",

    "linebreak-style": ["error", "unix"],
    curly: 1,

    "@typescript-eslint/no-non-null-assertion": "off",
  },
};

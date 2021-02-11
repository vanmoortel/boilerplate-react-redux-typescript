module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [ "@typescript-eslint" ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript"
  ],
  "env": {
    "browser": true,
    "jest": true
  }
};
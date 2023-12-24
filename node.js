module.exports = {
  extends: [
    "@rocketseat/eslint-config/node",
    "prettier"
  ],
  plugins: [
    "prettier",
    "simple-import-sort"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "crlf",
        "singleQuote": true,
        "semi": false
      }
    ],
    camelcase: "off",
    "no-unless-constructor": "off",
    "simple-import-sort/imports": "error"
  }
}
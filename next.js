module.exports = {
  extends: [
    "@rocketseat/eslint-config/next",
    "prettier"
  ],
  plugins: [
    "prettier",
    "simple-import-sort"
  ],
  rules: {
    camelcase: "off",
    "no-unless-constructor": "off",
    "simple-import-sort/imports": "error"
  }
}
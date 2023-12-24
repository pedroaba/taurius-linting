module.exports = {
  extends: [
    "@rocketseat/eslint-config/react",
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
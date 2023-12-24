# Taurius ESLint Config

## Include configs

- [x] Standard config base;
- [x] React plugin;
- [x] React Hooks plugin;
- [x] JSX a11y plugin;
- [x] Prettier;

## Setup

Installation:

```shell
# pnpm command
> $ pnpm i -D @taurius-linting/eslint

# npm command
> $ npm i -D @taurius-linting/eslint

# yarn command
> $ yarn add -D @taurius-linting/eslint
```

Usage: 
```json
// inside .eslintrc.json
{
  "extends": ["@taurius-linting/eslint/next"] // for NextJS
}
```

```json
// inside .eslintrc.json
{
  "extends": ["@taurius-linting/eslint/react"] // for Pure React
}
```

```json
// inside .eslintrc.json
{
  "extends": ["@taurius-linting/eslint/node"] // for Pure NodeJS
}
```
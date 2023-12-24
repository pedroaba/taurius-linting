# Taurius ESLint Config Description

The Taurius ESLint Config is a comprehensive set of configurations for ESLint, a popular linting tool for JavaScript. Designed to enhance code consistency and quality, this package provides a solid default configuration, including essential plugins for React, React Hooks, JSX, and accessibility (a11y), along with integration with Prettier to ensure consistent formatting.

## Included Configurations

- **Standard Configuration:** Default base configuration.
- **React Plugin:** Support for React projects.
- **React Hooks Plugin:** Specific rules for React Hooks.
- **JSX a11y Plugin:** Rules to ensure accessibility in JSX code.
- **Prettier:** Integration with Prettier for consistent formatting.

## Configuration and Usage

### Installation

You can install the Taurius ESLint Config using the following commands:

```shell
# pnpm command
> $ pnpm i -D @taurius-linting/eslint

# npm command
> $ npm i -D @taurius-linting/eslint

# yarn command
> $ yarn add -D @taurius-linting/eslint
```

### Usage

Configure ESLint in your project by editing the `.eslintrc.json` file with one of the following extensions, depending on the project type:

- For Next.js projects:

```json
// Inside the .eslintrc.json file
{
  "extends": ["@taurius-linting/eslint/next"]
}
```

- For pure React projects:

```json
// Inside the .eslintrc.json file
{
  "extends": ["@taurius-linting/eslint/react"]
}
```

- For pure Node.js projects:

```json
// Inside the .eslintrc.json file
{
  "extends": ["@taurius-linting/eslint/node"]
}
```

The Taurius ESLint Config simplifies ESLint configuration, providing a robust starting point to ensure code consistency and quality across different types of JavaScript projects.
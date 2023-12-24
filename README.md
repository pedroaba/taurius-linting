# Descrição do Taurius ESLint Config

O Taurius ESLint Config é um conjunto abrangente de configurações para o ESLint, uma ferramenta popular de linting para JavaScript. Projetado para melhorar a consistência e qualidade do código, este pacote oferece uma configuração padrão sólida, incluindo plugins essenciais para projetos React, React Hooks, JSX e acessibilidade (a11y), além de integração com o Prettier para garantir formatação consistente.

## Configurações Incluídas

- **Configuração Padrão:** Configuração base padrão.
- **Plugin React:** Suporte para projetos React.
- **Plugin React Hooks:** Regras específicas para Hooks do React.
- **Plugin JSX a11y:** Regras para garantir acessibilidade em código JSX.
- **Prettier:** Integração com o Prettier para consistência de formatação.

## Configuração e Uso

### Instalação

Você pode instalar o Taurius ESLint Config através dos seguintes comandos:

```shell
# Comando pnpm
> $ pnpm i -D @taurius-linting/eslint

# Comando npm
> $ npm i -D @taurius-linting/eslint

# Comando yarn
> $ yarn add -D @taurius-linting/eslint
```

### Uso

Configure o ESLint em seu projeto editando o arquivo `.eslintrc.json` com uma das seguintes extensões, dependendo do tipo de projeto:

- Para projetos Next.js:

```json
// Dentro do arquivo .eslintrc.json
{
  "extends": ["@taurius-linting/eslint/next"]
}
```

- Para projetos React puro:

```json
// Dentro do arquivo .eslintrc.json
{
  "extends": ["@taurius-linting/eslint/react"]
}
```

- Para projetos Node.js puros:

```json
// Dentro do arquivo .eslintrc.json
{
  "extends": ["@taurius-linting/eslint/node"]
}
```

O Taurius ESLint Config simplifica a configuração do ESLint, fornecendo um ponto de partida robusto para garantir a consistência e qualidade do código em diferentes tipos de projetos JavaScript.
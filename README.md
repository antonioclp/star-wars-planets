# Projeto Star Wars Planets - TypeScript

O Star Wars Planets é um projeto desenvolvido em TypeScript e React que permite aos usuários se registrar, fazer login e visualizar planetas da saga Star Wars por meio de uma integração com uma API. A aplicação também oferece funcionalidades de filtragem dos planetas.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Registro e Login: Os usuários podem se registrar e fazer login na aplicação para acessar as funcionalidades.
- Integração com API de Star Wars: A aplicação faz requisições a uma API de Star Wars para obter informações sobre os planetas.
- Visualização de Planetas: Os usuários podem visualizar os planetas da saga Star Wars na aplicação.
- Filtros: A aplicação oferece opção de filtragem por nome do planeta.

## Dependências

O projeto possui as seguintes dependências:

```json
"dependencies": {
    "@hookform/resolvers": "^3.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.44.3",
    "react-router-dom": "^6.12.0",
    "zod": "^3.21.4"
  }
```

## Dependências de desenvolvimento

O projeto possui as seguintes dependências de desenvolvimento:

```json
"devDependencies": {
    "@types/react": "^18.0.37",
    "@types/react-dom": "^18.0.11",
    "@typescript-eslint/eslint-plugin": "^5.59.0",
    "@typescript-eslint/parser": "^5.59.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.38.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.2",
    "typescript": "^5.0.2",
    "vite": "^4.3.9"
  }
```

## Scripts

O projeto possui os seguintes scripts:

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Compila o código TypeScript e realiza o build da aplicação.
- `lint`: Executa a verificação de linting do código utilizando o ESLint.
- `preview`: Inicia um servidor de preview para visualizar a aplicação buildada.

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
```

## Como Utilizar

1. Clone o repositório em sua máquina local.
2. No terminal, navegue até a pasta raiz do projeto.
3. Execute o comando `npm install` ou `yarn install` para instalar as dependências.
4. Execute o comando `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento.
5. Acesse a aplicação em seu navegador através do endereço fornecido pelo servidor de desenvolvimento.


## Api

- https://swapi.dev/

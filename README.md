# Personal Portfolio

My main portfolio is a Vite + React application with CI/CD additions included. Special thanks to the [Vite Team](https://vitejs.dev/guide/) &amp; [Adrian at Javascript Mastery](https://github.com/adrianhajdin/project_3D_developer_portfolio) for the project template.

# [Click here to view Portfolio!](https://adrianrtownsend.github.io/portfolio/)

# Running local steps

- Setup contact form

  You must create an account with [emailjs](https://www.emailjs.com/) as well as complete the steps to create a service and email template found [here](https://www.emailjs.com/docs/tutorial/adding-email-service/).

  Once done replace the following variables found from the service and template settings

  ```
  VITE_APP_EMAILJS_SERVICE_ID=
  VITE_APP_EMAILJS_TEMPLATE_ID=
  VITE_APP_EMAILJS_PUBLIC_KEY=
  ```

  Replace these variables with your own chosen values

  ```
  VITE_APP_EMAILJS_TO_NAME=
  VITE_APP_EMAILJS_TO_EMAIL=
  VITE_APP_EMAILJS_SUBJECT=W
  ```

- Run using `npm`

```
npm install
npm run dev
```

- Run using `docker`

```
docker compose build
docker compose up
```

# Notes from Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Feature List (In Progress)

- [ ] 3D Animation fixes
- [ ] Newsletter headline feed

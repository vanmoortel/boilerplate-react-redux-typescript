
# Boilerplate react redux typescript

This project is a personal boilerplate with react, redux, saga, typescript, custom internationalization and Ant design.
I probably will not maintain it, so only use it if you know what you're doing.

## Architecture
I try to follow the principle of Domain-driven design, so each functionality is grouped with all its component in the same folder.
- src
    -  \_\_test__: Global tests or utils for test
    - assets: Images, font etc..
    - components: Reusable stateless component (not connected to redux)
    - features: Each functionality
        - Counter: Contain the container, reducer, action, saga and others functionalities if needed
            -  \_\_test__: Tests for this functionality(sagas, selectors, slice and e2e)
    - translations: Translation with key = english version and value translated version
    - utils

## Libraries

### Ant Design([doc](https://ant.design/docs/react/introduce))
-   🌈 Enterprise-class UI designed for web applications.

-   📦 A set of high-quality React components out of the box.

-   🛡 Written in TypeScript with predictable static types.

-   ⚙️ Whole package of design resources and development tools.

-   🌍 Internationalization support for dozens of languages.

-   🎨 Powerful theme customization in every detail.

### CRACO([doc](https://github.com/gsoft-inc/craco))
**C**reate **R**eact **A**pp **C**onfiguration **O**verride is an easy and comprehensible configuration layer for create-react-app.

Get all the benefits of create-react-app **and** customization without using 'eject' by adding a single `craco.config.js` file at the root of your application and customize your eslint, babel, postcss configurations and many more.

### Jest([doc](https://jestjs.io/docs/en/getting-started))
Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

### React([doc](https://reactjs.org/docs/getting-started.html))
A JavaScript library for building user interfaces

### Redux([doc](https://redux.js.org/introduction/getting-started))
A Predictable State Container for JS Apps

### Redux Saga([doc](https://redux-saga.js.org/))
`redux-saga` is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

### Redux Toolkit([doc](https://redux-toolkit.js.org/introduction/quick-start))
The official, opinionated, batteries-included toolset for efficient Redux development

### Typescript([doc](https://www.typescriptlang.org/docs/handbook/intro.html))
TypeScript extends JavaScript by adding types.

By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\  
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Todos
Devops
Hosting
Quality control

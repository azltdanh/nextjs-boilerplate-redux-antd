# VIBE Web Customer

## Available Scripts

In the project directory, you can run:

### `npm run db`

Runs the mock API on [http://localhost:5000](http://localhost:5000).

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm run debug` for debug mode listening on port 9229, then run profile `Debug VSCode` in Debug tab of Visual Code, add some break points for debugging.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
`npm run coverage` to get coverage report.<br />
`npm run coverage -- --watch` to run in watch mode.

### `npm run lint`

Scan your code for any issues or problems using ESLint.<br />
Noted that `npm run lint` will be trigger on every git commit, and `npm run test` on every git push.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

# Coding Standards

## Libraries

* Next.js - The React Framework supporting SSG and SSR.
* antd - Ant Design - React UI Framework.
* axios - promise-based HTTP client.
* json-server - a full mock REST API.
* redux & redux-saga - for state management and side effects handling.
* classnames, date-fns, lodash, etc. - some powerful utilities.
* jest & enzyme - for snapshots and components output testing.
* eslint & prettier - for code linter and code formatter.
* husky & lint-staged - for better git commit and git push.
* sonar-qube - for code quality and security.

## Coding Styles
* Follow Airbnb JavaScript Style Guide.
* Code should be simple and explicit.
* Functional style is preferred to OOP.
* Prefer small modules that do one thing well and avoid large frameworks.
* Module import should be ordered “high-level” to “low-level” and “first-use” to “last-use” — low-level helper functions should be at the bottom.
* Use descriptive variable names.
* Code and comments should stay within 80 character line length.
* Functions should generally not accept more than 3–4 arguments, consider using an “options” object instead.
* Sort constants, props alphabetically, wherever possible.
* Sort value props then handler props.
* Embed “on” in front of the handler props name to distinguish it with value props.
* Embed “is”/”has”/”should” for boolean variable/props.
* When a stateless component has a lot of props, destructure props inside the function.
* Gather all related functions close, with called functions below the function which is calling them.

## IDE - Visual Studio Code
Recommended Extensions
* Code Spell Checker
* Coverage Gutters
* Debugger for Chrome
* ES7 React/Redux/GraphQL/React-Native snippets
* ESLint
* GitLens
* Jest
* Jest Snippets
* Markdown All in One
* npm Intellisense
* Path Intellisense
* Prettier - Code formatter
* SonarLint
* Visual Studio IntelliCode
* XML Tools

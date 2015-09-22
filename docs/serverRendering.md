# Server side rendering
## Problems
* ES6 transpilation
 React components are written with ES6 and transpiled with webpack and babel-loader.
 In order to render those components on server side, we must transpile it first. Babel 'Require Hook' is used for the job. http://babeljs.io/docs/usage/require/
 Note: Require hook method transpiles all files required after `require("babel/register");`, but not the file itself! 
 * CSS loaded with `require` using webpack
 * React router
 * history/lib/createBrowserHistory if used in components for navigation 
 * Any DOM related and browser specific API mentioning in components, i.e. `window`
 
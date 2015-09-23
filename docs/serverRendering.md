# Server side rendering
## Problems

### ES6 transpilation
 React components are written in ES6 and transpiled with webpack and babel-loader.
 In order to render those components on server side, we must transpile it first: 
 
 **Option 1:** Babel 'Require Hook' is used for the job. http://babeljs.io/docs/usage/require/
 ```javscript
 // babelHook.js
 // load babel config and require it
 var fs = require('fs');
 
 var babelrc = fs.readFileSync('./.babelrc');
 var config;
 
 try {
   config = JSON.parse(babelrc);
 } catch (err) {
   console.error('==>     ERROR: Error parsing your .babelrc.');
   console.error(err);
 }
 
 require('babel/register')(config);
 ```
  
 **Note:** Require hook method transpiles all files required after `require("babel/register");`, but not the file itself! 
 
### CSS loaded with `require` using webpack
 Webpack allow us to require css files as modules, which is great, but we cannot render a component which requires css on the server side.
 One way to work around this issue is to skip requiring CSSs on the server by using DefinePlugin: 
 ```
 if (process.env.__BROWSER__) {
    import './Component.css';
 }
 ```
 This approach is ugly and plus it causes page to blink because initial page is rendered without styles and styles are added after the bundle is received and parsed.
  Instead, we could setup another webpack config (just for node) to:
   1. transpile ES6 with babel-loader (instead of babel Require Hook)
   2. extract all required CSSs into single css file (with ExtractTextPlugin)
   3. make a new bundle just for code required to render components. We use this bundle anywhere from the node application just as any other module.
   4. add newly generated CSS file to HTML page that will be sent to client (either by adding a link tag or by reading the file from the system and inserting its content between style tags) - now we have valid css in the initial page rendered on the server, so no flickering
   5. in the client entry point, remove added/inserted styles, because the same styles are added again from the bundle.js

### React router
### history/lib/createBrowserHistory if used in components for navigation
  Use Link component for navigation instead of history object
 ### Any DOM related and browser specific API mentioning in components, i.e. `window`
 
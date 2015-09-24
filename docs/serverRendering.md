# Server side rendering
Great article about benefits of server side rendering by Tom Dale - [You’re Missing the Point of Server-Side Rendered JavaScript Apps](http://tomdale.net/2015/02/youre-missing-the-point-of-server-side-rendered-javascript-apps/)
## Problems

### ES6 transpilation
 React components are written in ES6 and transpiled with webpack and babel-loader.
 In order to render those components on server side, we must transpile it first: 
 
 **Option 1:** Babel 'Require Hook' is used for the job. http://babeljs.io/docs/usage/require/
 ```javascript
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
 ```javascript
 // server.js
 require('./babelHook');
 // ... other requires that will be transpiled
 // ... other code that is not transpiled
 ```
  
 **Note:** Require hook method transpiles all files required after `require("babel/register");`, but not the file itself! 
 
 **Option 2:** ES6 transpiling done with webpack and babel-loader
 
 We can setup another webpack config for server side code (it is in the same file 'webpack.config.js') and use it only for code related to rendering React components.
 In other words, we will generate another bundle that will be used as black box that returns rendered app.
 
 See `webpack.config.js`
 
### CSS loaded with `require` using webpack
 Webpack allow us to require css files as modules, which is great, but we cannot render a component which requires css on the server side.
 
 One way to work around this issue is to skip requiring CSSs on the server by using DefinePlugin: 
 ```javascript
 if (process.env.__BROWSER__) {
    import './Component.css';
 }
 ```
 This approach is ugly and plus it causes page to blink because initial page is rendered without styles and styles are added after the bundle is received and parsed.

 Instead, we could setup another webpack config (just for node) to:
   1. transpile ES6 with babel-loader (instead of babel Require Hook)
   2. extract all required CSSs into single css file (with ExtractTextPlugin)
   3. make a new bundle just for code required to render components. We use this bundle anywhere from the node application just as any other module, so we don't have to pass the whole server app through webpack.
   4. add newly generated CSS file to HTML page that will be sent to client (either by adding a link tag or by reading the file from the system and inserting its content between style tags) - now we have valid css in the initial page rendered on the server, so no flickering
   5. in the client entry point, remove added/inserted styles, because the same styles are added again from the bundle.js

### React router
[See offitial docs](https://github.com/rackt/react-router/blob/master/docs/guides/advanced/ServerRendering.md)

In short:
  1. get the current path from the request (req.path), and wrap it with history/lib/createLocation
  2. get the application routes
  3. call match(location, routes) to match routes to location without rendering
  4. render RoutingContext component to string and send it back to client - A RoutingContext renders the component tree for a given router state and sets the history object and the current location in context.
  
### history/lib/createBrowserHistory if used for navigation outside of components
  If this is the requirement, we must skip using of createBrowserHistory on server. **See src/history.js**
  
  Other options to consider for transitions:
    * Link component
    * History mixin
    * history object is passed to top level components through props - we could pass it further down
  
### Any DOM related and browser specific API mentioning in components, i.e. `window`
 
 
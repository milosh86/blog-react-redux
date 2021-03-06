# blog-react-redux
## How to run
* npm install
* npm start
* mongod
* navigate to http://localhost:3000

##What's in?
* React components (smart/containers and dumb/stateless)
* Redux state container + react-redux binding
* Routing with react-router 1.0
* Webpack dev middleware for Express instead of dev-server
* Hot reloading + Red Box
* Redux Dev Tools
* Webpack:
    - Module bundling
    - Babel transpilation
    - Loading styles and other assets with require
    - Preparing server for rendering
    - Dev tools

## TODO
- [x] server side rendering
- [ ] Full website
- [x] Backend for storing and handling Blog data (MongoDB or CouchDB)
- [ ] Authentication for restricted services (editing content) - passport.js
- [ ] Fetching only needed data for a route, instead of the whole store
- [ ] Webpack production config
- [ ] Relay, Falcor?
- [ ] Immutable.js or Mori
- [ ] Migrate to React 0.14
- [ ] react-transform-render-visualizer - visualize component rendering
- [ ] transit js (for transferring data structures from server to client)
- [ ] testing (Mocha, Jasmine, Jest, ...) 

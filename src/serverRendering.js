import React from 'react';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import BlogApp from './reducers';
import {getRoutes} from './routes';
import configureStore from './store/configureStore.js';
import createLocation  from 'history/lib/createLocation';
import { RoutingContext, match } from 'react-router'

import fs from 'fs';
import path from 'path';

module.exports.render = function (req, res) {
  let location = createLocation(req.url);
  let routes = getRoutes();

  match({routes, location}, function (error, redirectLocation, renderProps) {
    if (redirectLocation) res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    else if (error) res.send(500, error.messge);
    else if (renderProps === null) res.send(404, 'Not Found');
    else res.send(renderFullPage(renderProps));
  });
}

function renderFullPage(renderProps) {
  const store = configureStore();

  let App = (
    <div id="app">
      <Provider store={store}>
        {() => <RoutingContext {...renderProps} />}
      </Provider>
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor}/>
      </DebugPanel>
    </div>
  );

  const html = React.renderToString(App);
  const initialState = store.getState();
  // TODO: make webpack plugin that will load all css in memory ... if possible
  var styleContent = fs.readFileSync(path.resolve('.', 'out/styles.css'));
// <link rel="stylesheet" type="text/css" href="/static/styles.css" />
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv='Content-type' content='text/html; charset=utf-8'>
        <title>Blog App</title>
        <style>
          body {
            font-family: "Consolas", monospace;
          }
        </style>
        <style id="blog-server-styles">${styleContent}</style>
      </head>
      <body>
        <h1>Blog App made with React and Redux (in progress)</h1>
        <div id="content">
          ${html}
        </div>

        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
`;
}
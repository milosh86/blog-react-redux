import React from 'react';
import {RoutingContext, match} from 'react-router'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import createLocation from 'history/lib/createLocation';

import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
import {getRoutes} from './routes';
import configureStore from './store/configureStore.js';


// express middleware
export let renderAndReply = function (req, res) {
  let initialData = req.initialData;
  let location = createLocation(req.url);
  let routes = getRoutes();

  match({routes, location}, function (error, redirectLocation, renderProps) {

    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    }

    else if (error) {
      res.send(500, error.message);
    }

    else if (renderProps === null) {
      res.send(404, 'Not Found');
    }

    else {
      res.send(renderFullPage(renderProps, initialData));
    }
  });
}

function renderFullPage(renderProps, initialState) {
  const store = configureStore(initialState);

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

  // TODO: make webpack plugin that will load all css in memory ... if possible
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv='Content-type' content='text/html; charset=utf-8'>
        <title>Blog App</title>
        <link rel="stylesheet" type="text/css" href="/static/styles.css" id="blog-server-styles" />
        <style>
          body {
            font-family: "Consolas", monospace;
            margin: 0;
          }

          .header-nav {
            width: 100%;
            height: 20px;
            padding: 5px;
            margin: 0 0 15px 0;
            background-color: #1f95b4;
          }

          .link a {
            color: antiquewhite;
          }
          a:link {
            text-decoration: none;

          }

          a:visited {
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          a:active {
            text-decoration: underline;
            color: #fff;
          }

        </style>
      </head>
      <body>
       <div class="header-nav">
          <span class="link"><a href='/'>MDZ</a></span>
          <span class="link"><a href='/blog'>BLOG</a></span>
        </div>
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

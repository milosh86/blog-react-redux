import React from 'react';
import {Provider} from 'react-redux';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';
import {Router} from 'react-router';
import {getRoutes} from './routes';

import history from './history.js';

import configureStore from './store/configureStore.js';

const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

function setupClientSideRoutes() {
  return (
    <Router history={history}>
      {getRoutes()}
    </Router>
  );
}

React.render(
  <div id="app">
    <Provider store={store}>
      {setupClientSideRoutes}
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('content')
);

let serverStyles = document.getElementById('blog-server-styles');
serverStyles && document.getElementsByTagName('head')[0].removeChild(serverStyles);






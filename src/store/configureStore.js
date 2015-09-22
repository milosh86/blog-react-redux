import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducers';

import {devTools, persistState} from 'redux-devtools';

export default function configureStore(initialState) {

  let createStoreDev = compose(devTools())(createStore);

  const store = createStoreDev(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
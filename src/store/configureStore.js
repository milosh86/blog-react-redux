import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import {devTools, persistState} from 'redux-devtools';

export default function (initialState) {

  let createStoreDev = compose(devTools())(createStore);
  let createStoreWithMiddleware = applyMiddleware(thunk)(createStoreDev);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

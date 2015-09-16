import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory.js';
import {Provider} from 'react-redux';

import BlogContainer from './containers/BlogContainer/BlogContainer.js';
import PostListContainer from './containers/PostListContainer/PostListContainer.js';
import PostContainer from './containers/PostContainer/PostContainer.js';
import NewPostContainer from './containers/NewPostContainer/NewPostContainer.js';
import NotFound from './components/NotFound/NotFound.js';

import history from './history.js';
import configureStore from './store/configureStore.js';

const store = configureStore();

let routes = (
  <Router history={history}>
    <Route path='/' component={BlogContainer}>
      <IndexRoute component={PostListContainer} />
      <Route name="post" path="post/:permalink" component={PostContainer}>
        <IndexRoute component={NotFound} />
      </Route>
      <Route path="newpost" component={NewPostContainer} />
      <Route path="tag/:tag" component={PostListContainer} />
      <Route path="archive/:month" component={PostListContainer} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route path='/' component={BlogContainer}>
          <IndexRoute component={PostListContainer} />
          <Route name="post" path="post/:permalink" component={PostContainer}>
            <IndexRoute component={NotFound} />
          </Route>
          <Route path="newpost" component={NewPostContainer} />
          <Route path="tag/:tag" component={PostListContainer} />
          <Route path="archive/:month" component={PostListContainer} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('content')
);






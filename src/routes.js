import React from 'react';
import {Route, IndexRoute} from 'react-router';

import BlogContainer from './containers/BlogContainer/BlogContainer.js';
import PostListContainer from './containers/PostListContainer/PostListContainer.js';
import PostContainer from './containers/PostContainer/PostContainer.js';
import NewPostContainer from './containers/NewPostContainer/NewPostContainer.js';
import NotFound from './components/NotFound/NotFound.js';
import Home from './components/Home/Home.js';

export function getRoutes() {
  return (
    <div>
      <Route path='/' component={Home}/>
      <Route path='/blog' component={BlogContainer}>
        <IndexRoute component={PostListContainer}/>
        <Route path="post/:permalink" component={PostContainer}/>
        <Route path="post(/)" component={NewPostContainer}/>
        <Route path="newpost" component={NewPostContainer}/>
        <Route path="tag/:tag" component={PostListContainer}/>
        <Route path="archive/:month" component={PostListContainer}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </div>
  );
}







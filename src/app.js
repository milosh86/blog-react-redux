import React from 'react';
import Router, {Route, RouteHandler, DefaultRoute, NotFoundRoute} from 'react-router';
import Blog from './components/Blog/Blog.js';
import PostListContainer from './containers/PostListContainer/PostListContainer.js';
import PostContainer from './containers/PostContainer/PostContainer.js';
import NewPost from './components/NewPost/NewPost.js';
import NotFound from './components/NotFound/NotFound.js';

import initRouter from './router.js';

let routes = (
  <Route path='/' handler={Blog}>
    <DefaultRoute handler={PostListContainer} />
    <Route name="post" path="post/:permalink" handler={PostContainer} />
    <Route path="post/?" handler={NotFound} />
    <Route name="newpost" handler={NewPost}/>
    <Route name="tag" path="tag/:tag" handler={PostListContainer} />
    <Route name="archive" path="archive/:month" handler={PostListContainer} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

initRouter(routes, Handler => React.render(<Handler />, document.getElementById('content')));




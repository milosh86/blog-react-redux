import React from 'react';
import Router, {Route, RouteHandler, DefaultRoute, NotFoundRoute} from 'react-router';
import Blog from './components/Blog/Blog.js';
import Comments from './components/Comments/Comments.js';
import PostList from './components/PostList/PostList.js';
import Post from './components/Post/Post.js';
import InputBox from './components/Comments/InputBox/InputBox.js';
import PostListContainer from './containers/PostListContainer/PostListContainer.js';

let routes = (
  <Route path='/' handler={Blog}>
    <DefaultRoute handler={PostListContainer}/>
    <Route path="post/:permalink" handler={Post} />
    <Route path="post/?" handler={Comments} />
    <Route path="tag/:tag" handler={PostListContainer} />
    <Route path="archive/:month" handler={PostListContainer}/>
    <NotFoundRoute handler={InputBox} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

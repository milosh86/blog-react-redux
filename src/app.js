import React from 'react';
//import Todo from './components/Todo/Todo.js';
import PostList from './components/PostList/PostList.js';
import Arch from './components/Archives/Archives.js';
import Cat from './components/Categories/Categories.js';

React.render(
  <div>
    <PostList/>
    <Arch title="Arhiva" onItemClick={function(i) {console.log('HELLO: ', i)}} />
    <Cat title="Kategorije" onItemClick={function(i) {console.log('HELLO: ', i)}} />
  </div>,
  document.getElementById('content'));

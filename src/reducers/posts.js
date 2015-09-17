import {CREATE_POST, UPDATE_POST, DELETE_POST, CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT} from '../constants/BlogConstants';

let someDate = new Date;
someDate.setMonth(1);

const initialState = [
  {
    id: 1,
    title: 'The post number 1',
    author: 'Milos Dzepina',
    date: new Date(),
    permalink: 'post-1',
    body: 'Hello there this is dummy blog post number 1...',
    tags: ['dummy', 'js', 'react'],
    comments: [
      {
        id: 1,
        author: 'User A',
        date: new Date(),
        body: 'Hey, this is stupid!!!'
      },
      {
        id: 2,
        author: 'User B',
        date: new Date(),
        body: 'Yes, it sucks...'
      }
    ]

  },
  {
    id: 2,
    title: 'The post number 2',
    author: 'Milos Dzepina',
    date: someDate,
    permalink: 'post-2',
    body: 'Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there' +
    'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
    'this is dummy blog post number 2...Hello *****************Should not see this ***************mmy blog post number 2...Hello there this is dummy blog post number 2...' +
    'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
    'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
    'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
    'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
    'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
    'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
    'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...',
    tags: ['dummy', 'redux', 'react'],
    comments: [
      {
        id: 3,
        author: 'User C',
        date: new Date(),
        body: '2: Hey, this is stupid!!!'
      },
      {
        id: 4,
        author: 'User D',
        date: new Date(),
        body: '2: Yes, it sucks...'
      }
    ]

  }
];

let _id = 3;
let _commentId = 5;


function comments(state = [], action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return [...state, action.comment];

    case UPDATE_COMMENT:
      return state.map(comment =>
        comment.id === action.data.id ?
          Object.assign({}, comment, action.data) :
          comment);

    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId);

    default:
      return state;
  }
}

export default function posts(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return [...state, {
        ...action.post,
        id: _id++,
        permalink: action.post.title.replace(/\s/g, '-'),
        comments: [],
        date: new Date
      }];

    case UPDATE_POST:
      return state.map(post =>
        post.id === action.id ?
          Object.assign({}, post, action.data) :
          post
      );

    case DELETE_POST:
      return state.filter(post => post.id !== action.id);

    case CREATE_COMMENT:
    case UPDATE_COMMENT:
    case DELETE_COMMENT:
      return state.map(post =>
        post.id === action.postId ?
          Object.assign({}, post, {comments: comments(post.comments, action)}) :
          post
      );

    default:
      return state;
  }
}

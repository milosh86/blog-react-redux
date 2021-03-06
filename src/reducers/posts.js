//import {CREATE_POST, UPDATE_POST, REMOVE_POST, CREATE_COMMENT, UPDATE_COMMENT, REMOVE_COMMENT} from '../constants/BlogConstants';
import BlogConstants from '../constants/BlogConstants';

let someDate = new Date;
someDate.setMonth(1);

const initialState = [
  {
    _id: 'post-1',
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
    _id: 'post-2',
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

//***************************************
// redux-devtools replay all actions from the start for each new action, so don't use any state in here (i.e. post and comment ids). Instead generate IDs before dispatching action!
//***************************************

function comments(state = [], action) {
  switch (action.type) {
    case BlogConstants.CREATING_COMMENT:
      return [...state, Object.assign({}, action.comment, {status: 'pending'})];

    case BlogConstants.CREATING_COMMENT_DONE:
      return state.map((comment => {
        if (comment.author === action.comment.author &&
          comment.body === action.comment.body) {
          return Object.assign(comment, {status: 'done'})
        }

        return comment;
      }));

    case BlogConstants.CREATING_COMMENT_FAILED:
      return state.map((comment => {
        if (comment.author === action.comment.author &&
          comment.body === action.comment.body) {
          return Object.assign(comment, {status: 'failed'})
        }

        return comment;
      }));

    case BlogConstants.UPDATE_COMMENT:
      return state.map(comment =>
        comment.id === action.data.id ?
          Object.assign({}, comment, action.data) :
          comment);

    case BlogConstants.REMOVE_COMMENT:
      return state.filter(comment => comment.body !== action.body);

    default:
      return state;
  }
}

export default function posts(state = {}, action) {
  switch (action.type) {
    case BlogConstants.CREATE_POST:
    case BlogConstants.CREATE_POST_FAILED: //todo: implement fail logic
      return [...state, {
        ...action.post,
        permalink: action.post.title.replace(/\s/g, '-'),
        comments: []
      }];

    case BlogConstants.UPDATE_POST:
      return state.map(post =>
        post.id === action.id ?
          Object.assign({}, post, action.data) :
          post
      );

    case BlogConstants.REMOVE_POST:
      return state.filter(post => post.id !== action.id);

    case BlogConstants.CREATING_COMMENT:
    case BlogConstants.UPDATE_COMMENT:
    case BlogConstants.REMOVE_COMMENT:
    case BlogConstants.CREATING_COMMENT_DONE:
    case BlogConstants.CREATING_COMMENT_FAILED:
      return state.map(post =>
        post.permalink === action.postId ?
          Object.assign({}, post, {comments: comments(post.comments, action)}) :
          post
      );

    default:
      return state;
  }
}

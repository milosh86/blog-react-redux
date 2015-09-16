import {combineReducers} from 'redux';
import posts from './posts';
import profile from './profile';

const rootReducer = combineReducers({
  posts,
  profile
});

export default rootReducer;
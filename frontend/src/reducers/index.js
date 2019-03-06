import { combineReducers } from 'redux';
import postReducer from './postReducer';
import subredditReducer from './subredditReducer';
import commentReducer from './commentReducer';
import userReducer from './userReducer';

export default combineReducers({
  posts: postReducer,
  subreddits: subredditReducer,
  comments: commentReducer,
  users: userReducer,
})

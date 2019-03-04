import { combineReducers } from 'redux';
import postReducer from './postReducer';
import subredditReducer from './subredditReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  posts: postReducer,
  subreddits: subredditReducer,
  comments: commentReducer
})

import { combineReducers } from 'redux';
import postReducer from './postReducer';
import subredditReducer from './subredditReducer';

export default combineReducers({
  posts: postReducer,
  subreddits: subredditReducer
})

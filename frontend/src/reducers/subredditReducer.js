import { FETCH_SUBREDDITS, FETCH_SUBREDDIT_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_SUBREDDITS:
      console.log('subredditReducer: FETCH_SUBREDDITS: reducer');
      return {
        ...state,
        items: action.payload
      }
    case FETCH_SUBREDDIT_POSTS:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}



// action.type and action.payload both came from postActions.
// now, need to implement this in the Post component.

import { FETCH_POSTS, FETCH_SINGLE_POST, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      console.log('postReducer: FETCH_POSTS: reducer');
      return {
        ...state,
        items: action.payload
      }
    case FETCH_SINGLE_POST:  // ?
      return {
        // item: action.payload
      }
    case NEW_POST:
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

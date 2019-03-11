import { FETCH_POSTS, FETCH_SINGLE_POST, FETCH_USER_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  userPosts: [],
  newPost: {},
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case FETCH_SINGLE_POST:
      return {
        items: [...state.items],
        item: action.payload
      }
    case FETCH_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        newPost: action.payload
      }
    default:
      return state;
  }
}

// NOTES:        // action.type and action.payload both came from postActions.
                // now, need to implement this in the Post component.

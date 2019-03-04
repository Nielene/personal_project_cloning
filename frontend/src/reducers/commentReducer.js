import { FETCH_COMMENTS, NEW_COMMENT } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_COMMENTS:
      console.log('comemntReducer: FETCH_COMMENTS: reducer');
      return {
        ...state,
        items: action.payload
      }
    case NEW_COMMENT:
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

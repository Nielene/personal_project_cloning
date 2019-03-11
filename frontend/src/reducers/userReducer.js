import { REMOVE_USER, RECEIVE_USER  } from '../actions/types';

const initialState = {
  isLoggedIn: false,
  user: {},
}

export default function(state = initialState, action) {
  switch(action.type) {

    case RECEIVE_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
    case REMOVE_USER:
    return {
      ...state,
      isLoggedIn: false,
      user: {}
    }

    default:
      return state;
  }
}

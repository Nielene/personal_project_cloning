import { CREATE_USER, ADD_USER, REMOVE_USER, LOGOUT_USER, CHECK_USER, RECEIVE_USER, IS_USER_AUTHENTICATED, CHECK_AUTHENTICATION_STATUS, DEAUTHENTICATE_USER  } from '../actions/types';
import Auth from "./utils/Auth";

const initialState = {
  isLoggedIn: false,
  user: {},
  // username: ''
}

export default function(state = initialState, action) {
  switch(action.type) {

    case RECEIVE_USER:  // note
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
    case LOGOUT_USER:
    // console.log('postReducer: FETCH_POSTS: reducer');
    return {
      ...state,
      isLoggedIn: false,
      user: {}
    }

    default:
      return state;
  }
}

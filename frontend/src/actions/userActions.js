import { REMOVE_USER, RECEIVE_USER } from './types';
import axios from 'axios';
import Auth from "../utils/Auth";



export const createUser = (userCredentialsObject) => dispatch => {
  axios.post ('/users/new', userCredentialsObject)
  .then ((res) => {
    dispatch (login(userCredentialsObject))
  })
}


export const login = (user) => dispatch => {            // ACTION FUNCITONS
  let username = user.username;
  let password = user.password;
  axios.post('/users/login', {username, password} )
  .then((res) => {
    dispatch ({
      type: RECEIVE_USER,                               // ACTION OBJECTS - ARE SYNCHRONOUSE
      payload: res.data
    })
    Auth.authenticateUser(user.username)
  })
  // .then (() => {dispatch (checkAuthenticateStatus(username)) })    // REDUNDANT AND UNNECESSARY. SHOULD TRUST THAT THE login FUNCITNO 200 MESSAGE IS ENOUGH.
}


export const checkAuthenticateStatus = () => dispatch => {
  axios.post('/users/isLoggedIn')
  .then((res) => {
    if (res.data.username && res.data.username.username === Auth.getToken()) {
      dispatch ({
        type: RECEIVE_USER,
        payload: res.data.username
      })
    } else if (res.data.username) {
      logout()
    } else {
      dispatch({
        type: REMOVE_USER
      })
    }
  })
}


export const logout = () => dispatch => {
  axios.post(`/users/logout`)
  .then(() => {
    Auth.deauthenticateUser();
  })
  .then(() => {
    dispatch(checkAuthenticateStatus())
  })
}




//WE DO ASYNCHRONOUS ACTIONS IN REDUX USING FUNCITONS.
// WHEN YOUO WANT TO DO SOMEHTING ASYNCHRONOUS, YOU DISPATACH AN ACTION THAT  IS A FUNCTION
// AN ASYNC ACITON WILL ALWAYS DISPATCH A "SYNCH / PLAIN-OBJECT" ACTION
// A SYNC ACTION IS ALWAYS GOING TO BE AN OBJECT. ASYNC ACTION IS ALWAYS A FUCNTION.

// IN THE CONSOLE: choose Application tab instead; go to Local Storage under Storage and click on http://localhost:3000. should then see Key / Value table.

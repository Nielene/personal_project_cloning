import { REMOVE_USER, RECEIVE_USER } from './types';
import axios from 'axios';
import Auth from "../utils/Auth";

export const createUser = (userCredentialsObject) => dispatch => {
  axios.post ('/users/new', userCredentialsObject)
  .then ((res) => {
    dispatch (login(userCredentialsObject))
    // dispatch ({
    //   type: RECEIVE_USER,
    //   payload: res.data.body  //  the resoponse that came form the backend with the user
    // })
    console.log(res.data.body); //from backend RETURNING, db.one, etc on that INSERT statement
    console.log(res.data.body.username);
    debugger      // console -> React -> Provider -> scroll to storeState -> users -> user -> object with info (yay!)
  })

}


export const login = (user) => dispatch => {    // ACTION FUNCITONS
  // debugger
  let username = user.username;
  let password = user.password;
  Auth.authenticateUser(user.username)
  axios.post('/users/login', {username, password} )
  .then((res) => {
    dispatch ({
      type: RECEIVE_USER,     // ACTION OBJECTS - ARE SYNCHRONOUSE
      payload: res.data
    })
    console.log('login', res.data);
    // debugger
  })
  // .then (() => {
  //   dispatch (checkAuthenticateStatus(username)) // REDUNDANT AND UNNECESSARY. SHOULD TRUST THAT THE login FUNCITNO 200 MESSAGE IS ENOUGH.
  //   // debugger
  // })
}

//WE DO ASYNCHRONOUS ACTIONS IN REDUX USING FUNCITONS.
// WHEN YOUO WANT TO DO SOMEHTING ASYNCHRONOUS, YOU DISPATACH AN ACTION THAT  IS A FUNCTION
// AN ASYNC ACITON WILL ALWAYS DISPATCH A "SYNCH / PLAIN-OBJECT" ACTION
// A SYNC ACTION IS ALWAYS GOING TO BE AN OBJECT. ASYNC ACTION IS ALWAYS A FUCNTION.


export const checkAuthenticateStatus = (user) => dispatch => {
  // let username = user.username;
  // let password = user.password;
  // debugger
  // axios.post('/users/isLoggedIn', {username, password})
  axios.post('/users/isLoggedIn')
  .then((res) => {
    console.log('res line 50', res.data.username.username);
    // debugger
    if (res.data.username.username === Auth.getToken()) {
      dispatch ({
        type: RECEIVE_USER,
        payload: Auth.isUserAuthenticated()
      })
    } else if (user.data.username) {
      this.logout();
    } else {
      Auth.deauthenticateUser();
    }
  })
}

// in the Console: choose Application tab instead; go to Local Storage under Storage and click on http://localhost:3000. should then see Key / Value table.

export const logout = (id) => dispatch => {
  // console.log('postActions.js: fetching Single Post');
  axios.post(`/users/logout`)
  .then(() => {
    Auth.deauthenticateUser();
  })
  .then(() => {
    dispatch(checkAuthenticateStatus())
  })
}

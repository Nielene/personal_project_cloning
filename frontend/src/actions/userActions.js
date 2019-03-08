import { CREATE_USER, ADD_USER, REMOVE_USER, CHECK_USER, RECEIVE_USER, LOGOUT_USER, DEAUTHENTICATE_USER, CHECK_AUTHENTICATION_STATUS } from './types';
import axios from 'axios';

// import, FETCH_SINGLE_POST

export const createUser = (userCredentialsObject) => dispatch => {
  axios.post ('/users/new', userCredentialsObject)
  .then ((res) => {
    dispatch ({
      type: RECEIVE_USER,
      payload: res.data.body  //  the resoponse that came form the backend with the user
    })
    console.log(res.data.body); //from backend RETURNING, db.one, etc on that INSERT statement
    console.log(res.data.body.username);
    // debugger      // console -> React -> Provider -> scroll to storeState -> users -> user -> object with info (yay!)
  })
}


export const login = (user) => dispatch => {
  axios.post('/users/login', user)
  .then((res) => {
    dispatch ({
      type: RECEIVE_USER,
      payload: res.data.body
    })
  })
}


export const logout = (id) => dispatch => {
  // console.log('postActions.js: fetching Single Post');
    axios.post(`/users/logout`)
    .then((res) => {
      // console.log('res.data.body', res.data.body);
      // debugger
      dispatch ({
        type: LOGOUT_USER ,
        // DEAUTHENTICATE_USER,
        payload: res.data.body
      })
      // .then (() => {
      //   dispatch ({
      //     type: CHECK_USER,
      //     // CHECK_AUTHENTICATION_STATUS,
      //     payload: res.data.body
      //   })
      // })
    })
}

// export const checkAuthenticateStatus = () => dispatch => {
//   // console.log('postActions.js: fetching action is beign called');
//   axios.get('/users/isLoggedIn')
//   .then(res => {
//     // console.log('postActions.js: res.data.posts', res.data.posts);
//     if (res.data.username === Auth.getToken()) {
//
//       dispatch ({
//         type: RECEIVE_USER,
//         payload: res.data.posts
//       })
//     } else if (res.data.username) {
//       dispatch ( {
//         type: ,
//         payload:
//       })
//     }
//   })
// }

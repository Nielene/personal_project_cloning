import { FETCH_COMMENTS, NEW_COMMENT } from './types';
import axios from 'axios';

// import, FETCH_SINGLE_POST

export const fetchComments = () => dispatch => {
  console.log('commentActions.js: fetching action is beign called');
  axios.get('/comments')
  .then(res => {
    console.log('commentActions.js: res.data.comments', res.data.comments);
    dispatch ({
      type: FETCH_COMMENTS,
      payload: res.data.comments
    })
  })
}

export const createComment = (commentData) => dispatch => {
  console.log('commentActions.js: comment created: action called');
  axios.post('/comments',  commentData)
  .then(comment => {
    // debugger
    dispatch ({
      type: NEW_COMMENT,
      payload: comment.data.body
    })
    // debugger
  })
}

// export const fetchSinglePost = (id) => dispatch => {
//   console.log('commentActions.js: fetching Single Post');
//     axios.get(`/comments/${id}`)
//     .then(res => {
//       console.log('res.data.body', res.data.body);
//       // debugger
//       dispatch ({
//         type: FETCH_SINGLE_POST,
//         payload: res.data.body
//       })
//     })
// }



//payload: now go to postReducer: action.payload refers to this 'payload';
//type: the mandatory 'type' is also being evaluated in the switch conditional statement in postReducer

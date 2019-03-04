import { FETCH_COMMENTS, NEW_COMMENT } from './types';
import axios from 'axios';

// import, FETCH_SINGLE_POST

export const fetchComments = (post_id) => dispatch => {
  console.log('commentActions.js: fetching action is beign called');
  axios.get(`/comments/${post_id}`)
  .then(res => {
    console.log('commentActions.js: res.data.comments', res.data.comments);
    dispatch ({
      type: FETCH_COMMENTS,
      payload: res.data.post_comments
    })
  })
}

// export const fetchSinglePost = (id) => dispatch => {
//   console.log('postActions.js: fetching Single Post');
//     axios.get(`/posts/${id}`)
//     .then(res => {
//       console.log('res.data.body', res.data.body);
//       // debugger
//       dispatch ({
//         type: FETCH_SINGLE_POST,
//         payload: res.data.body
//       })
//     })
// }

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

// export const createPost = (postData) => dispatch => {
//   console.log('postActions.js: post created: action called');
//   axios.post('/posts',  postData)
//   .then(post => {
//     // debugger
//     dispatch ({
//       type: NEW_POST,
//       payload: post.data.body
//     })
//     // debugger
//   })
//
// }


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

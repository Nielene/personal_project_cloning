import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  console.log('fetching action is beign called');
    axios.get('/posts')
    .then(res => {
      console.log('res.data.posts', res.data.posts);
      dispatch ({
        type: FETCH_POSTS,
        payload: res.data.posts
      })
    })
}

export const createPost = (postData) => dispatch => {
  console.log('action called');
  axios.post('/posts',  postData)
  .then(post => {
    // debugger
    dispatch ({
      type: NEW_POST,
      payload: post.data.body
    })
    // debugger
  })

}

//payload: now go to postReducer: action.payload refers to this 'payload';
//type: the mandatory 'type' is also being evaluated in the switch conditional statement in postReducer

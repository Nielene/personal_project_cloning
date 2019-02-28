import { FETCH_POSTS, FETCH_SINGLE_POST, NEW_POST } from './types';
import axios from 'axios';

// import, FETCH_SINGLE_POST

export const fetchPosts = () => dispatch => {
  console.log('postActions.js: fetching action is beign called');
    axios.get('/posts')
    .then(res => {
      console.log('res.data.posts', res.data.posts);
      dispatch ({
        type: FETCH_POSTS,
        payload: res.data.posts
      })
    })
}

export const fetchSinglePost = () => dispatch => {
  console.log('fetching Single Post');
    // axios.get('/posts')
    // .then(res => {
    //   console.log('res.data.posts.id', res.data.posts.id);
    //   debugger
    //   dispatch ({
    //     type: FETCH_SINGLE_POST,
    //     payload: res.data.posts.id
    //   })
    // })
}

export const createPost = (postData) => dispatch => {
  console.log('postActions.js: post created: action called');
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

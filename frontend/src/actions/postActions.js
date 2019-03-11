import { FETCH_POSTS, FETCH_SINGLE_POST, FETCH_USER_POSTS, NEW_POST } from './types';
import axios from 'axios';


export const fetchPosts = () => dispatch => {
    axios.get('/posts')
    .then(res => {
      dispatch ({
        type: FETCH_POSTS,
        payload: res.data.posts
      })
    })
}

export const fetchSinglePost = (id) => dispatch => {
    axios.get(`/posts/${id}`)
    .then(res => {
      dispatch ({
        type: FETCH_SINGLE_POST,
        payload: res.data.body
      })
    })
}

export const fetchUserPosts = (user_id) => dispatch => {
  axios.get(`/posts/${user_id}`)
  .then(res => {
    dispatch ({
      type: FETCH_USER_POSTS,
      payload: res.data.user_posts
    })
  })
}


export const createPost = (postData) => dispatch => {
  axios.post('/posts',  postData)
  .then(post => {
    dispatch ({
      type: NEW_POST,
      payload: post.data.body
    })
  })

}

//payload: now go to postReducer: action.payload refers to this 'payload';
//type: the mandatory 'type' is also being evaluated in the switch conditional statement in postReducer

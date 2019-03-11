import { FETCH_COMMENTS, NEW_COMMENT } from './types';
import axios from 'axios';


export const fetchComments = (post_id) => dispatch => {
  axios.get(`/comments/${post_id}`)
  .then(res => {
    dispatch ({
      type: FETCH_COMMENTS,
      payload: res.data.post_comments
    })
  })
}


export const createComment = (commentData) => dispatch => {
  axios.post(`/comments/`,  commentData)
  .then(comment => {
    dispatch ({
      type: NEW_COMMENT,
      payload: comment.data.body
    })
  })
}











//payload: now go to postReducer: action.payload refers to this 'payload';
//type: the mandatory 'type' is also being evaluated in the switch conditional statement in postReducer

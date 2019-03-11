import { FETCH_SUBREDDITS, FETCH_SUBREDDIT_POSTS } from './types';
import axios from 'axios';



export const fetchMySubreddits = () => dispatch => {
  axios.get ('/subreddits')
  .then(res => {
    dispatch ({
      type: FETCH_SUBREDDITS,
      payload: res.data.subreddits
    })
  })
}

export const fetchSubredditPosts = (subreddit_id) => dispatch => {
  axios.get(`/subreddits/${subreddit_id}`)
  .then(res => {
    dispatch ({
      type: FETCH_SUBREDDIT_POSTS,
      payload: res.data.subreddit_posts
    })
  })
}























// NEED IT FROM THE BACKEND: POSTS QUERIES SECTION

// res.data.posts (100) [{…}, {…}, {…}]
//
// 5:
// id: 6
// image_url: "http://lorempixel.com/640/480"
// my_subreddit_title: "YESYESYESYESNO"
// post_body: "Iure et fugiat. Tenetur consequatur ratione ea et consequatur. Provident maxime et dolor tenetur expedita non ut. Totam repellat ducimus architecto alias sint. Cum natus in non eveniet aut amet."
// post_title: "Eveniet saepe sunt."
// __proto__: Object

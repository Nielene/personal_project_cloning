import { FETCH_SUBREDDITS } from './types';
import axios from 'axios';

export const fetchMySubreddits = () => dispatch => {
  console.log('subredditActions.js: fetchSubreddits');
  axios.get ('/subreddits')
  .then(res => {
    console.log('res.data.posts.my_subreddit_title', res.data.subreddits);
    dispatch ({
      type: FETCH_SUBREDDITS,
      payload: res.data.subreddits
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

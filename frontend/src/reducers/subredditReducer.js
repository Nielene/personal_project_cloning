import { FETCH_SUBREDDITS, FETCH_SUBREDDIT_POSTS } from '../actions/types';

const initialState = {
  subredditList: [],
  subredditPosts: [],
  item: {},
  // subreddit_posts: [],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_SUBREDDITS:
       // console.log('subredditReducer: FETCH_SUBREDDITS: reducer');
      return {
        ...state,
        subredditList: action.payload
      }
    case FETCH_SUBREDDIT_POSTS:
      return {
        ...state,
        subredditPosts: action.payload
      }
    default:
      return state;
  }
}


// //NORMALIZE FETCH_SUBREDDIT_POSTS:
// const normalizeData = arr => {
//   let obj = {};
//   arr.forEach(item => {
//     obj[item.id] = item;
//   })
//   return obj
// }
//
// export const normalizedSubredditReducer = (initialState = {}, action)



// action.type and action.payload both came from postActions.
// now, need to implement this in the Post component.

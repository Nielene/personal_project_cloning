import { RECEIVE_POSTS } from '../actions/PostsActions';

const normalizeData = posts => {
  let obj = {};
  if (posts) {
    posts.posts.forEach(item => {
      obj[item.id] = item;
    });
    return obj
  }
}



const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  console.log('POST REDUCER',action.posts)
  switch (action.type) {
    case RECEIVE_POSTS:
      return normalizeData(action.posts)
    default:
      return oldState
  }
}

export default PostsReducer;

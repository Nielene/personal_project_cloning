import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({post}) => {
  console.log('SinglePost.js: display single post');
  if(!!post) {
    return (
      <div key={post.id}>
        <h1>Single Post</h1>
        <Link to={'/post/'+ post.image_url}>{post.post_title}</Link>
        <p>{post.image_url}</p>
        <p>{post.post_body}</p>
        <p>{post.my_subreddit_title}</p>
        <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
        <p>votes: {Math.floor(Math.random() * 10000)}</p>
      </div>
    )
  } else {
    return (
      <h2>Single Post not displaying </h2>
    )
    // return null;
  }
}

export default SinglePost;

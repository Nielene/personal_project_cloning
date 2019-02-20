import React from 'react';
import '../css/Home.css';
// import PostsContainer from './posts/PostsContainer.js'
import Posts from './posts/Posts'

export const Home = (props) => {
  return (
    <div className= 'home'>
      <h1>Reddit Home</h1>
      <Posts to={ '/posts'}/>
    </div>
  )
}



// <PostsContainer />

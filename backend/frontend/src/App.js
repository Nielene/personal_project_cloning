import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import { Route, Switch } from 'react-router-dom';

import { getPosts } from './util/util';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import PostsContainer from './components/posts/PostsContainer';
// import { Posts } from './components/posts/Posts';


class App extends Component {
  // state = {
  //   posts: [],
  // }

  // componentDidMount() {
  //   axios.get('/posts')
  //   .then(res => {
  //     console.log(res.data.posts);
  //   })
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h2>Posts</h2>
        <PostsContainer />
        <main>
          <Route exact path = '/' component = { Home } />
        </main>
      </div>
    );
  }
}

export default App;


// <Route exact path = '/posts' component = { PostsContainer } />

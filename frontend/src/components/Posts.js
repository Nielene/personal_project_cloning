import React, { Component } from 'react';
import axios from 'axios'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get('/posts')
    .then(res => {
      console.log(res.data.posts);
      this.setState({posts: res.data.posts})
    })
    // fetch('http://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then(data => console.log(data))
  }

  render () {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.post_title}</h3>
        <p>{post.post_body}</p>
        <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
        <p>votes: {Math.floor(Math.random() * 10000)}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

export default Posts;

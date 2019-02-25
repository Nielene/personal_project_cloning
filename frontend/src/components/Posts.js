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
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res.data);
      this.setState({posts: res.data})
    })
    // fetch('http://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then(data => console.log(data))
  }

  render () {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
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

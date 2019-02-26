import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
// import axios from 'axios'

class Posts extends Component {

//---------------moved to postActions------------------------
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: [],
  //   }
  // }
  //
  // componentDidMount() {
  //   axios.get('/posts')
  //   .then(res => {
  //     console.log('res.data.posts', res.data.posts);
  //     this.setState({posts: res.data.posts})
  //   })
  //   // fetch('http://jsonplaceholder.typicode.com/posts')
  //   // .then(res => res.json())
  //   // .then(data => console.log(data))
  // }
  //---------------------------------------

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.post_title}</h3>
        <p>{post.post_body}</p>
        <p>{post.my_subreddit_title}</p>
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired   
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts } )(Posts);

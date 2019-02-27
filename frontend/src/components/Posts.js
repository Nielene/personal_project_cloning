import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
// import axios from 'axios'

import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render () {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.post_title}</h3>
        <p>{post.image_url}</p>
        <p>{post.post_body}</p>
        <p>{post.my_subreddit_title}</p>
        <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
        <p>votes: {Math.floor(Math.random() * 10000)}</p>
      </div>
    ))
    return (
      <div>

        <NavLink to={'/submit'}>Submit a new text post</NavLink>
        <br />
        <NavLink to={'/submit'}>Submit a new link</NavLink>

        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts } )(Posts);

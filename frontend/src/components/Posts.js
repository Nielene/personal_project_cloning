import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
// import axios from 'axios'

import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

class Posts extends Component {

  componentDidMount() {
    console.log('Posts.js');
    this.props.fetchPosts();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.posts.unshift(nextProps.newPost)
  //   }
  // }

  render () {
    console.log('Posts.js: {postItems}', this.props.posts);
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <Link to={'/post/'+ post.id}>{post.post_title}</Link>
        <p>{post.image_url}</p>
        <p>{post.post_body}</p>
        <p>{post.my_subreddit_title}</p>
        <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
        <p>votes: {Math.floor(Math.random() * 10000)}</p>
        <br />
    </div>
    ))
    return (
      <div>

        <Link to={'/submit'}>Submit a new text post</Link>
        <br />
        <Link to={'/submit'}>Submit a new link</Link>

        <h1>Posts</h1>
        <div>
          {postItems}
        </div>
      </div>
    )
  }
}

// Posts.propTypes = {
//   fetchPosts: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired,
//   newPost: PropTypes.object
// }
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Posts);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
// import PropTypes from 'prop-types';
// import axios from 'axios'

import { Link } from 'react-router-dom';


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
        <img src={post.image_url} alt='' height='42' width='42' />
        <Link to={'/post/'+ post.id}>{' '}{post.post_title}</Link>
        {/*<p>{post.post_body}</p>*/}
        <h5>{post.my_subreddit_title}</h5>
        <h6>'submitted ' + {Math.floor(Math.random() * 24) + ' hours ago by **USER** to **SUBREDDIT TITLE**'} </h6>
        <div>
          <h6>votes: {Math.floor(Math.random() * 10000)}</h6>
          <h6>comments</h6>
        </div>
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


const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Posts);

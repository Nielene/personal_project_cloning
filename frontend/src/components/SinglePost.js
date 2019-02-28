// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchSinglePost } from '../actions/postActions';
// // import axios from 'axios'
//
// import { Link } from 'react-router-dom';
//
// class SinglePost extends Component {
//
//   componentDidMount() {
//     this.props.fetchSinglePost();
//   }
//
//
//   render () {
//     const singlePostItem = this.props.posts.filter(post => (
//       <div key={post.id}>
//
//         <Link to={'/singlePost/'+ post.id}>{post.post_title}</Link>
//
//         <p>{post.image_url}</p>
//         <p>{post.post_body}</p>
//         <p>{post.my_subreddit_title}</p>
//         <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
//         <p>votes: {Math.floor(Math.random() * 10000)}</p>
//       </div>
//     ))
//     return (
//       <div>
//
//         <Link to={'/submit'}>Submit a new text post</Link>
//         <br />
//         <Link to={'/submit'}>Submit a new link</Link>
//
//         <h1>{post.post_title}</h1>
//         {postItems}
//       </div>
//     )
//   }
// }
//
// Posts.propTypes = {
//   fetchSinglePost: PropTypes.func.isRequired,
//   posts: PropTypes.array.isRequired,
//   newPost: PropTypes.object
// }
//
// const mapStateToProps = state => ({
//   posts: state.posts.items,
//   newPost: state.posts.item
// })
//
// export default connect(mapStateToProps, { fetchSinglePost } )(SinglePost);

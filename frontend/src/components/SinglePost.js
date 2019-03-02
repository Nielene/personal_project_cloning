import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions/postActions';


class SinglePost extends Component {
  // console.log('SinglePost.js: display single post');
  // console.log('@', props, props.post)
  // const post = props.post;
  componentDidMount() {
    this.props.fetchSinglePost(this.props.match.params.id);
  }

  render() {
    console.log('PARAMS??', this.props)
    return (
      <div>single post</div>
    )
    // if (this.props.post.id) {
    //   return (
    //     <div>
    //       <h2><Link to=''>{this.props.post.post_title}</Link></h2>
    //       <h5>{ 'submitted ' + Math.floor(Math.random() * 24) + ' hours ago by **USER**' } </h5>
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>No post found. Sorry.</div>
    //   )
    // }


    // if(!!post) {
    //   return (
    //     // <div key={post.id}>
    //     //   <h1>Single Post</h1>
    //     //   <Link to={'/post/'+ post.image_url}>{post.post_title}</Link>
    //     //   <p>{post.image_url}</p>
    //     //   <p>{post.post_body}</p>
    //     //   <p>{post.my_subreddit_title}</p>
    //     //   <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
    //     //   <p>votes: {Math.floor(Math.random() * 10000)}</p>
    //     // </div>
    //     <div>single post</div>
    //   )
    // } else {
    //   return (
    //     <h2>Single Post not displaying </h2>
    //   )
    //   // return null;
    // }
  }
}



const mapStateToProps = state => ({
  post: state.posts.item
})

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePost: () => dispatch(fetchSinglePost)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);

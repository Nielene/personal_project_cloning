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
    if (this.props.post.id) {

      return (
        <div>
          <div>single post</div>
        </div>
      )
    } else {
      return (
        <div>no post found. sorry.</div>
      )
    }


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

export default connect(mapStateToProps, { fetchSinglePost })(SinglePost);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchSubredditPosts } from '../actions/subredditActions';

// import Comments from '../components/Comments'


class SingleSubredditPosts extends Component {

  componentDidMount() {
    console.log('this.props.match.params.id', this.props.match.params.id);
    this.props.fetchSubredditPosts(this.props.match.params.id)
  }

  render () {
    console.log('SingleSubredditPosts.js: {postItems}', this.props.posts);
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

        <h1>Posts belonging to this Subreddit</h1>
        <div>
          {postItems}
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  posts: state.posts.items,
})

const mapDispatchToProps = dispatch => {
  return {
    // fetchSinglePost: () => dispatch(fetchSinglePost)
    // fetchSinglePost: (id) => dispatch(fetchSinglePost(this.props.match.params.id))
    fetchSubredditPosts: (id) => dispatch(fetchSubredditPosts(id))
  }
}


// export default connect(mapStateToProps, {fetchSinglePost})(SinglePost);
export default connect(mapStateToProps, mapDispatchToProps)(SingleSubredditPosts);

//---------------------------

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

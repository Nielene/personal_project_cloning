import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../../actions/postActions';
import { fetchPosts } from '../../actions/postActions';

import Comments from '../comments/Comments'
import '../../css/posts/SinglePost.css';


class SinglePost extends Component {

  componentDidMount() {
    this.props.fetchSinglePost(this.props.match.params.id);
    this.props.fetchPosts();

  }

  render() {

    if (this.props.post.id) {
      return (
        <div >
          <div className='eachPostItemDiv'>


            <div className='postItemVotes singleSubreddit'>
              <button><span role="img" aria-label="Panda">🔼</span></button>
              <h3>{this.props.post.post_votes}</h3>
              <button><span role="img" aria-label="Panda">🔽</span></button>
            </div>

            <div className='postItemImage'>
              <img src={this.props.post.image_url} alt='' height='50' width='50' />
            </div>

            <div className='postItemBody'>
              <h2><Link to={'/post/' + this.props.post.id}>{this.props.post.post_title}</Link></h2>
              <p>{this.props.post.post_body}</p>
              <h5>{ 'submitted ' + this.props.post.post_time  + ' hours ago by ' }
                <Link to=''>{this.props.post.username}</Link>

                <Link to=''>{this.props.newPost.my_subreddit_title}</Link>
              </h5>

              <div>
                <Link to={'/post/' + this.props.post.id}>
                  <h6>{this.props.post.count} comments</h6>
                  <h6>{'/' + this.props.post.post_type}</h6>
              </Link>
              </div>

            </div>

            <div className='enlargedPostImage'>
              <img src={this.props.post.image_url} alt='' height='50' width='50' />
            </div>

          </div>


          <div className='commentsComponentDiv'>
            <Comments />
          </div>

        </div>
      )
    } else {
      return (
        <div>Single post is not displaying</div>
      )
    }
  }
}


const mapStateToProps = state => ({
  post: state.posts.item,
  newPost: state.posts.item
})

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePost: (id) => dispatch(fetchSinglePost(id)),
    fetchPosts: () => dispatch(fetchPosts()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);








































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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
// import { createPost } from '../../actions/postActions'; unnessary////////
// import PropTypes from 'prop-types';
// import axios from 'axios'

import { Link } from 'react-router-dom';
import SearchForm from '../search/SearchForm';
import '../../css/posts/Posts.css';
import postFormText from './PostFormText';



class Posts extends Component {

  componentDidUpdate(prevProps) {
    console.log('Posts.js CURRENT PROPS', this.props);
    console.log('Posts.js PREVIOUS PROPS', prevProps)
    // debugger
    if (prevProps.match.params.post_id !== this.props.match.params.post_id) {
      this.props.fetchPosts(this.props.match.params.post_id)
    }
  }

  componentDidMount() {
    console.log('Posts.js');
    // debugger
    this.props.fetchPosts();
  }

// CAUSES ERROR:
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.posts.unshift(nextProps.newPost)
  //   }
  // }

  render () {
    // console.log('Posts.js: {postItems}', this.props.posts);
    console.log("ALL PROPS: ", this.props)
    const postItems = this.props.posts.map(post => (

      <div key={post.id} className='eachPostItemDiv'>
        <div className='postItemCount'>
          <h3>  </h3>
        </div>

        <div className='postItemVotes '>
          <button><span role="img" aria-label="Panda">🔼</span></button>
          <h3>{Math.floor(Math.random() * 10000)}</h3>
          <button><span role="img" aria-label="Panda">🔽</span></button>
        </div>

        <div className='postItemImage'>
          <img src={post.image_url} alt='' height='50' width='50' />
        </div>

        <div className='postItemBody'>
          <Link to={'/post/'+ post.id } style={{ textDecoration: 'none' }} > <p>{post.post_title}</p></Link>
          {/*<p>{post.post_body}</p>*/}
          <h6>submitted {Math.floor(Math.random() * 24)}  hours ago by <Link to={'/userPosts/' + post.user_id} style={{ textDecoration: 'none' }}> {post.username}</Link> to <Link to={'/subredditPosts/' + post.subreddit_id} style={{ textDecoration: 'none' }}>{post.my_subreddit_title}</Link> </h6>
          <div>
            <Link to={'/post/' + post.id} style={{ textDecoration: 'none' }}> <h6>{Math.floor(Math.random() * 1000)} comments</h6> </Link>
          </div>
        </div>

      </div>
    ))
    return (
      <div className='postHomePageDiv'>

      <div className='LinksAndSearch_PostItems_Div'>

        <div className='LinksAndSearchDiv'>
          <div className='LinksAndSearch'>
            <SearchForm />
            <br />
            <div className='postFormLinks'>
              <div className='postFormTextLink'>
                <Link to={'/submitText'} style={{ textDecoration: 'none' }}><p>Submit a new text post</p></Link>
              </div>
              <div className='postFormTextLink'>
                <Link to={'/submitLink'} style={{ textDecoration: 'none' }}><p>Submit a new link</p></Link>
              </div>
            </div>
          </div>
        </div>


        {/* <h1>Posts</h1> */}
        <div className='allPostItemsDiv'>
          {postItems}
        </div>
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
    fetchPosts: () => dispatch(fetchPosts()),
    // createPost: (postData) => dispatch(createPost(postData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Posts);

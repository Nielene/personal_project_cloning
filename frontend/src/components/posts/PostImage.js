import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../../actions/postActions';
import '../../css/posts/SinglePost.css';


const faker = require('faker')


class PostImage extends Component {

  componentDidMount() {
    this.props.fetchSinglePost(this.props.match.params.id)
  }

  render() {

      return (
        <div >
          <div className='eachPostItemDiv'>
            <img src={faker.image.image()} alt='' height='50' width='50' />
          </div>

        </div>
      )

  }
}


const mapStateToProps = state => ({
  post: state.posts.item
})

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePost: (id) => dispatch(fetchSinglePost(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostImage);

































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

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchSubredditPosts } from '../actions/subredditActions';

// import Comments from '../components/Comments'

{/*
  // const postItems = this.props.posts.filter(post => {
  //   return post.my_subreddit_title.toLowerCase() = (state.posts.items.my_subreddit_title.toLowerCase())
  */}

class SingleSubredditPosts extends Component {

  componentDidMount() {
    console.log('this.props.match.params.id', this.props.match.params.id);
    this.props.fetchSubredditPosts(this.props.match.params.id)
  }

  render () {
    console.log('SingleSubredditPosts.js: this.props.posts', this.props.posts);
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <img src={post.image_url} alt='' height='42' width='42' />
        <Link to={'/post/'+ post.id}>{' '}{post.post_title}</Link>
        <div className='inOneLine'>
          <h6>submitted {Math.floor(Math.random() * 24)} hours ago by **USER** to </h6>
          <Link to={'/subredditPosts/' + post.subreddit_id}><h6>{post.my_subreddit_title}</h6></Link>
        </div>
        <div>
          <h6>votes: {Math.floor(Math.random() * 10000)}</h6>
          <h6>comments</h6>
        </div>
        <br />
      </div>
    ))

{/*

  // handleSubmit = (event) => {
  //     event.preventDefault()
  //     let SearchResult = this.state.allPeople.filter(person => {
  //       // return person.name.toLowerCase() === (this.state.searchInput.toLowerCase())
  //       return person.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
  //     })
  //     this.setState({
  //       searchInput: '',
  //       selectedPerson: SearchResult
  //     })
  //     // console.log('selectedPerson', this.state.selectedPerson);
  //   }
  */}




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
  my_subreddit_title: state.posts.item
})

const mapDispatchToProps = dispatch => {
  return {
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

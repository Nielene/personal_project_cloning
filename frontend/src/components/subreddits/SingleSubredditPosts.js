import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchSubredditPosts } from '../../actions/subredditActions';
import { fetchMySubreddits } from '../../actions/subredditActions';
import '../../css/subreddits/SingleSubredditPosts.css';


// import Comments from '../components/Comments'

// {/*
//   const postItems = this.props.posts.filter(post => {
//     return post.my_subreddit_title.toLowerCase() === (state.posts.items.my_subreddit_title.toLowerCase())
// //   */}

class SingleSubredditPosts extends Component {

  componentDidUpdate(prevProps) {
    console.log('CURRENT PROPS', this.props);
    console.log('PREVIOUS PROPS', prevProps)
    if (prevProps.match.params.subreddit_id !== this.props.match.params.subreddit_id) {
      this.props.fetchSubredditPosts(this.props.match.params.subreddit_id)
    }
  }

  componentDidMount() {
    console.log('SingleSubredditPosts.js: this.props.match.params.id', this.props.match.params.subreddit_id);
    // debugger
    this.props.fetchSubredditPosts(this.props.match.params.subreddit_id)
    // this.props.fetchMySubreddits()
  }

  render () {
    console.log('SingleSubredditPosts.js: this.props.posts', this.props.posts);

    {/*
      const subredditTitle = this.props.subredditPosts.map(post => (
      <div key={post.id} className=''>
      <div>
      <Link to={'/subredditPosts/' + post.subreddit_id}>{post.my_subreddit_title}</Link>
      </div>
      </div>
      ))

      console.log('subredditTitle', subredditTitle);
      */}


    const postItems = this.props.subredditPosts.map(post => (
      <div key={post.id} className ='eachPostItemDiv'>
        <div className='postItemCount'>
          <h3> # </h3>
        </div>

        <div className='postItemVotes'>
          <h3>{Math.floor(Math.random() * 10000)}</h3>
        </div>

        <div className='postItemImage'>
          <img src={post.image_url} alt='' height='42' width='42' />
        </div>

        <div className='postItemBody'>
          <Link to={'/post/'+ post.id}> <p>{post.post_title}</p> </Link>
          <h6>submitted {Math.floor(Math.random() * 24)} hours ago by <Link to=''>{post.username}</Link> to <Link to={'/subredditPosts/' + post.subreddit_id}>{post.my_subreddit_title}</Link></h6>
        </div>

      </div>
    ))


    return (
      <div>

        <div>
          {/*
            SUBREDDIT TITLE HERE!!!!!!!!!!{subredditTitle}
            */}
          {postItems}
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  subredditPosts: state.subreddits.subredditPosts
  // subredditList: state.subreddits.subredditList
})

const mapDispatchToProps = dispatch => {
  return {
    fetchSubredditPosts: (id) => dispatch(fetchSubredditPosts(id))
    // fetchMySubreddits: () => dispatch(fetchMySubreddits())
  }
}

// export default connect(mapStateToProps, {fetchSinglePost})(SinglePost);
export default connect(mapStateToProps, mapDispatchToProps)(SingleSubredditPosts);

//---------------------------



// <div className='inOneLine'>
  // <Link to={'/subredditPosts/' + post.subreddit_id}><h6>{post.my_subreddit_title}</h6></Link>
// </div>





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

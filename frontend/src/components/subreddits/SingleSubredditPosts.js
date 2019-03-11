import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSubredditPosts } from '../../actions/subredditActions';
import '../../css/subreddits/SingleSubredditPosts.css';


class SingleSubredditPosts extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.subreddit_id !== this.props.match.params.subreddit_id) {
      this.props.fetchSubredditPosts(this.props.match.params.subreddit_id)
    }
  }

  componentDidMount() {
    this.props.fetchSubredditPosts(this.props.match.params.subreddit_id)
  }

  render () {
    const postItems = this.props.subredditPosts.map(post => (
      <div key={post.id} className ='eachPostItemDiv'>
        <div className='postItemCount'>

        </div>

        <div className='postItemVotes singleSubreddit'>
          <button><span role="img" aria-label="Panda">🔼</span></button>
          <h3>{Math.floor(Math.random() * 10000)}</h3>
          <button><span role="img" aria-label="Panda">🔽</span></button>
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
          {postItems}
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  subredditPosts: state.subreddits.subredditPosts
})

const mapDispatchToProps = dispatch => {
  return {
    fetchSubredditPosts: (id) => dispatch(fetchSubredditPosts(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleSubredditPosts);











































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
  //     //  console.log('selectedPerson', this.state.selectedPerson);
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

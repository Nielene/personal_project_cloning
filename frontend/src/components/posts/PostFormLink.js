import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { createPost } from '../../actions/postActions'//our action;
import '../../css/posts/PostFormLink.css';
import { withRouter } from "react-router";

import { fetchMySubreddits } from '../../actions/subredditActions';
import postFormText from './PostFormText';


class PostFormLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      subreddit_id: 1,
      image_url: '',
      post_time: Math.floor(Math.random() * 24),
      votes: 1,
      post_type: 'link',
      // post_type: Math.floor(Math.random() * ['gif', 'video', 'text', 'wiki', 'image'].length),
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  componentDidMount() {
    console.log('PostFormLink.js, this.props', this.props);
    this.props.fetchMySubreddits();
  }

  updateSubreddit = e => {
    // console.log('e.target.value', e.target.value);
    // this.props.history.push(e.target.value)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const addPost = {
      post_title: this.state.title,
      post_body: this.state.body,
      image_url: this.state.image_url,
      subreddit_id: this.state.subreddit_id,
      post_type: this.state.post_type,
      post_time: this.state.post_time,
    }

    // Call Action (postActions)
    this.props.createPost(addPost)

    const welcomeMessage = function() {
      alert(
        `Your Link Post has been submitted. `
      )
    }
    welcomeMessage();

  }

  render () {

    console.log(this.state);
    console.log(this.props);
    console.log(this.props.newPost.post_title);
    console.log(this.state.title);
    const linkToPostFormLink = () => {
      return (

        <div className='theLinks'>
          <div className='textLink'>
            <h3><Link to='/submitText'>Text</Link></h3>
          </div>
          <div className='linkLink'>
            <h3><Link to='/submitLink'>Link</Link></h3>
          </div>
        </div>
      )
    }

    const subredditItems = this.props.subredditList.map(subreddit => (
        <option key={subreddit.id} value={subreddit.id}>{subreddit.my_subreddit_title}</option>
      ))

    return (
      <div className='loginPageDiv'>

      <div className = 'formDiv' id='postFormLinkForm'>

        {linkToPostFormLink()}

        <form onSubmit={this.onSubmit}>

          <div className='submitATextOrLinkHeading'>
            <h3>Submit a Link</h3>
          </div>

          <div  className='inputs title'>
            <label>url: </label>
            <input type='text' name='image_url' onChange={this.onChange} value={this.props.newPost.image_url} />
          </div>


          <div className='inputs title'>
            <label>title: </label>
            <input type='text' name='title' onChange={this.onChange} value={this.props.newPost.title} />
          </div>


          <div className='inputs subreddit'>
            <label>choose your subreddit: </label>

              <div className='subredditDropDownDivInSubmitForms'>
                <div className="subredditDropDownDiv2">
                  <select className="subredditDropDown" onChange={this.onChange} name='subreddit_id' value={this.props.selectedId} >
                    {/* // <select onChange='window.location.href=this.value'> */}
                    <option>MY SUBREDDITS</option>
                    {subredditItems}

                  </select>
                </div>
              </div>

            </div>


          <div className='inputs submit'>
            <button type='submit'>Submit</button>
          </div>

        </form>
      </div>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  // posts: state.posts.items,
  newPost: state.posts.newPost,
  subredditList: state.subreddits.subredditList,

})

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (postData) => dispatch(createPost(postData)),
    fetchMySubreddits: (id) => dispatch(fetchMySubreddits(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps )(withRouter(PostFormLink));




// PostFormLink.propTypes = {
//   createPost: PropTypes.func.isRequired
// }
//
// export default connect(null, { createPost })(PostFormLink);






//=================

// const addPost = {
//   post_title: this.state.title,
//   post_body: this.state.body,
//   image_url: this.state.image_url,
//   my_subreddit_title: this.state.subreddit_title,
// }
// // debugger
//
// axios.post('/posts',  addPost )
// .then(res => {
//   console.log(res);
//   // debugger
// })


//=================

// axios.post('http://jsonplaceholder.typicode.com/posts', {title: this.state.title, body: this.state.body})
// .then(res => {
//   console.log(res);
//   // debugger
// })

//========================

// const addPost = {
//   title: this.state.title,
//   body: this.state.body,
// }
//
// fetch('http://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json'
//   },
//   body: JSON.stringify(addPost)
// })
// .then(res => res.json())
// .then(data => console.log(data))

//========================

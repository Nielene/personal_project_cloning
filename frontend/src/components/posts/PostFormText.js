import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../css/posts/PostFormText.css';
import { withRouter } from "react-router";

import { fetchMySubreddits } from '../../actions/subredditActions';
import { createPost } from '../../actions/postActions';

const faker = require('faker');


class PostFormText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      subreddit_id: 1,
      image_url: faker.image.imageUrl(),
      post_time: Math.floor(Math.random() * 24),
      votes: 1,
      post_type: 'text',
      // post_type: Math.floor(Math.random() * ['gif', 'video', 'text', 'wiki', 'image'].length),
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMySubreddits();
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

    this.props.createPost(addPost)        //   Call Action (postActions)


    const welcomeMessage = function() {
      alert(`Your Text Post has been submitted. `)
    }
    welcomeMessage();

  }

  render () {

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
      <div className='signupPageDiv'>

      <div className='formDiv' id='postFormTextForm'>

        {linkToPostFormLink()}

        <form onSubmit={this.onSubmit}>

          <div className='submitATextOrLinkHeading'>
            <h3>Submit a Text</h3>
          </div>

          <div className='inputs title'>
            <label>Title: </label>
            <input type='text' name='title' onChange={this.onChange} value={this.props.newPost.title} />
          </div>

          <div className='inputs text'>
            <label>Text: </label>
            <textarea name='body' onChange={this.onChange} value={this.props.newPost.body} />
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
  newPost: state.posts.newPost,
  subredditList: state.subreddits.subredditList,

})

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (postData) => dispatch(createPost(postData)),
    fetchMySubreddits: (id) => dispatch(fetchMySubreddits(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps )(withRouter(PostFormText));









































  // updateSubreddit = e => {
  //   //  console.log('e.target.value', e.target.value);
  //   // this.props.history.push(e.target.value)
  // }

// <input type='text' name='subreddit_title' onChange={this.onChange} value={this.state.subreddit_title} placeholder='subreddit title'/>



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
//    console.log(res);
//   // debugger
// })


//=================

// axios.post('http://jsonplaceholder.typicode.com/posts', {title: this.state.title, body: this.state.body})
// .then(res => {
//    console.log(res);
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
// .then(data =>  console.log(data))

//========================

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createPost } from '../actions/postActions'//our action;

import { NavLink } from 'react-router-dom'

// import axios from 'axios';
// const faker = require('faker');

class PostFormText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      subreddit_title: '',
      image_url: '',
      date_created: Math.floor(Math.random() * 24) + ' hours ago',
      votes: 1,
      post_type: Math.floor(Math.random() * ['gif', 'video', 'text', 'wiki', 'image'].length),
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
      my_subreddit_title: this.state.subreddit_title,
    }

    // Call Action (postActions)
    this.props.createPost(addPost)

  }

  render () {

    return (
      <div>

        <h3>Submit a new text post</h3>
        <form onSubmit={this.onSubmit}>

          <div>
            <label>title: </label><br />
            <input type='text' name='title' onChange={this.onChange} value={this.state.title} />
          </div>
          <br />

          <div>
            <label>text: </label><br />
            <textarea name='body' onChange={this.onChange} value={this.state.body} />
          </div>
          <br />

          <div>
            <label>choose where to post: </label><br />
            <input type='text' name='subreddit_title' onChange={this.onChange} value={this.state.subreddit_title} />
          </div>
          <br />

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

PostFormText.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostFormText);






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
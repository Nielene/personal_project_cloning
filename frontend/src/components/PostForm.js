import React, { Component } from 'react';
import axios from 'axios';
// const faker = require('faker');

class PostForm extends Component {
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


    axios.post('/posts',  {
      post_title: this.state.title,
      post_body: this.state.body,
      image_url: this.state.image_url,
      my_subreddit_title: this.state.subreddit_title
  } )
    .then(res => {
      console.log('res', res.data.body);
      // debugger
    })


  }

  render () {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br />
            <input type='text' name='title' onChange={this.onChange} value={this.state.title} />
          </div>
          <br />
          <div>
            <label>Body: </label><br />
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

export default PostForm;






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

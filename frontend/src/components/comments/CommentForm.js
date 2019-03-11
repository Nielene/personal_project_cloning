import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createComment } from '../../actions/commentActions'//our action;
import '../../css/comments/CommentForm.css';
import { withRouter } from 'react-router';


class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: Math.floor(Math.random() * 2000) + ' points',
      post_time: Math.floor(Math.random() * 24),
      body: '',
      // post_type: Math.floor(Math.random() * ['gif', 'video', 'text', 'wiki', 'image'].length),
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit(e) {
    e.preventDefault();
    const addComment = {
      comment_body: this.state.body,
    }
    this.props.createComment(addComment)      // CALL ACTION (commentActions)
  }


  render () {
    const placeholderText = "We'd appreciate if you remain polite with your comments."

    return (
      <div>
        <div>

          <form onSubmit={this.onSubmit}>

            <div>
              <label> </label><br />
              <textarea name='body' onChange={this.onChange} value={this.props.newComment.body} placeholder={placeholderText} rows="8" cols="80" />
            </div>
            <br />

            <button type='submit'>save</button>
          </form>
        </div>

      </div>
    )
  }
}


const mapStateToProps = state => ({
  newComment: state.posts.item,
})

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (commentData) => dispatch(createComment(commentData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommentForm))





































// CommentForm.propTypes = {
//   createComment: PropTypes.func.isRequired
// }
//
// export default connect(null, { createComment })(withRouter(CommentForm));






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

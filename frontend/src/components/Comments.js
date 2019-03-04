import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/commentActions';

// import PropTypes from 'prop-types';
// import axios from 'axios'

import CommentForm from './CommentForm';


class Comments extends Component {

  componentDidMount() {
    console.log('Comments.js', );
    // this.props.fetchComments(this.props.match.params.post_id);
    this.props.fetchComments();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newComment) {
  //     this.props.comments.unshift(nextProps.newComment)
  //   }
  // }

  render () {
    console.log('Comments.js: {commentItems} this.props', this.props);
    console.log('Comments.js: {commentItems} this.props.comments', this.props.comments);
    // console.log('Comments.js: {commentItems} this.props.match.params.post_id', this.props.match.params.post_id);


      const commentItems = this.props.comments.map(comment => (
        {/*
      <div key={comment.id}>
          // <p>{comment.comment_body}</p>
          // <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
          // <p>votes: {Math.floor(Math.random() * 10000)}</p>
          // <br />
      </div>
      */}
      ))


    // if (this.props.post.id) {

      return (
        <div>

          <h1>Comments</h1>
          <div>
            <CommentForm />
            {commentItems}


          </div>
        </div>
      )
    // } else {
    //   return (
    //     <div>Comments for this post are not displaying</div>
    //   )
    // }

  }
}

// Comments.propTypes = {
//   fetchComments: PropTypes.func.isRequired,
//   comments: PropTypes.array.isRequired,
//   newComment: PropTypes.object
// }


const mapStateToProps = state => ({
  comments: state.comments.items,
  newComment: state.comments.item
})

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchComments: (post_id) => dispatch(fetchComments(post_id))
    fetchComments: () => dispatch(fetchComments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Comments);

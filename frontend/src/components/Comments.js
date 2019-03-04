import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/commentActions';
// import axios from 'axios'

// import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';


class Comments extends Component {

  componentDidMount() {
    console.log('Comments.js');
    this.props.fetchComments();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newComment) {
  //     this.props.comments.unshift(nextProps.newComment)
  //   }
  // }

  render () {
    console.log('Comments.js: {commentItems}', this.props.comments);

    // const commentItems = this.props.comments.map(comment => (
    //   <div key={comment.id}>
    //     <textarea></textarea>
    //     <p>{comment.comment_body}</p>
    //     <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
    //     <p>votes: {Math.floor(Math.random() * 10000)}</p>
    //     <br />
    // </div>
    // ))

    return (
      <div>

        {/*
        }// <Link to={'/submit'}>Submit a new text comment</Link>
        // <br />
        // <Link to={'/submit'}>Submit a new link</Link>
        */}

        <h1>Comments</h1>
        <div>
          {CommentForm}
          {/*
          // {commentItems}
          */}
        </div>
      </div>
    )
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
    fetchComments: () => dispatch(fetchComments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(Comments);

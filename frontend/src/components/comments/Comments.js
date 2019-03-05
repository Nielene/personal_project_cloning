import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments } from '../../actions/commentActions';
import '../../css/comments/Comments.css';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';
// import axios from 'axios'

import CommentForm from './CommentForm';


class Comments extends Component {

  componentDidMount() {
    console.log('MY COMMENT ID', this.props);
    // this.props.fetchComments(this.props.match.params.post_id);
    this.props.fetchComments(this.props.match.params.id);
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
      <div key={comment.id}>

        <div className='userVotesAndTime'>
          <Link to=''><h6>**USERS**</h6></Link>
          <p>{Math.floor(Math.random() * 10000)} points</p>
          <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
        </div>
        <div className='commentBody'>
          <p>{comment.comment_body}</p>
        </div>

        </div>
      ))


    // if (this.props.post.id) {
      return (
        <div>

          {/* // <h1>Comments</h1> */}
          <div>
            <div className= 'commentFormDiv'>
              <CommentForm />
            </div>
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
    fetchComments: (id) => dispatch(fetchComments(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Comments));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments } from '../../actions/commentActions';
import '../../css/comments/Comments.css';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';


class Comments extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id);
  }


  render () {

    const commentItems = this.props.comments.map(comment => (
    <div key={comment.id} className =''>

      <div className='userVotesAndTime'>
        <Link to=''><h6>{comment.username}</h6></Link>
        <p>{Math.floor(Math.random() * 10000)} points</p>
        <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
      </div>
      <div className='commentBody'>
        <p>{comment.comment_body}</p>
      </div>

      </div>
    ))


    return (
      <div>
        <div>
          <div className= 'commentFormDiv'>
            <CommentForm />
          </div>
          {commentItems}
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  comments: state.comments.items,
  newComment: state.comments.item
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(fetchComments(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Comments));

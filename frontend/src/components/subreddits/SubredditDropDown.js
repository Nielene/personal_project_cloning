import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../css/subreddits/SubredditDropDown.css';

import { fetchMySubreddits } from '../../actions/subredditActions';


class Subreddits extends Component {

  componentDidMount() {
    this.props.fetchMySubreddits();
  }

  updateSubreddit = e => {
    this.props.history.push(e.target.value)
  }

  render () {
    const subredditItems = this.props.subredditList.map(subreddit => (
        <option key={subreddit.id} value={'/subredditPosts/' + subreddit.id}>{subreddit.my_subreddit_title}</option>
      ))
    return (
      <div className='subredditDropDownDiv'>
        <div className="subredditDropDownDiv2">
          <select className="subredditDropDown" onChange={this.updateSubreddit} value={this.props.selectedId} >
            <option>MY SUBREDDITS</option>
            {subredditItems}
            <hr />
            <option value={'/Subreddits/'}>EDIT SUBSCRIPTIONS</option>
          </select>
        </div>
      </div>

    )
  }
}

Subreddits.propTypes = {
  fetchMySubreddits: PropTypes.func.isRequired,
  subreddits: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  subredditList: state.subreddits.subredditList,
  newPost: state.subreddits.item,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMySubreddits: (id) => dispatch(fetchMySubreddits(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Subreddits));

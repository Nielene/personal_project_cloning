import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMySubreddits } from '../actions/subredditActions';

// import { SingleSubredditPosts } from './SingleSubredditPosts'
// import axios from 'axios'

// import { Link } from 'react-router-dom';

class Subreddits extends Component {

  componentDidMount() {
    console.log('SubredditDropDown.js, this.props', this.props);
    this.props.fetchMySubreddits();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.subreddits.unshift(nextProps.newPost)
  //   }
  // }

  updateSubreddit = e => {
    console.log('e.target.value', e.target.value);
    this.props.history.push(e.target.value)
  }

  render () {
    console.log('Subreddits.js: {subredditItems}');
    const subredditItems = this.props.subreddits.map(subreddit => (
        <option key={subreddit.id} value={'/subredditPosts/' + subreddit.id}>{subreddit.my_subreddit_title}</option>
    ))
    return (
      <div className="subreddits">
        <select onChange={this.updateSubreddit} value={this.props.selectedId} >
        {/* // <select onChange='window.location.href=this.value'> */}
          <option>MY SUBREDDITS</option>
          {subredditItems}
          <hr />
          <option>EDIT SUBSCRIPTIONS</option>
        </select>
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
  subreddits: state.subreddits.items,
  newPost: state.subreddits.item,
  // selectedId: ownProps.match.params.id
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMySubreddits: (id) => dispatch(fetchMySubreddits(id))
  }
}

// export default connect(mapStateToProps, { fetchMySubreddits } )(Subreddits);
export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Subreddits));

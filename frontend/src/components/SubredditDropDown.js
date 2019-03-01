import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMySubreddits } from '../actions/subredditActions';
// import axios from 'axios'

// import { Link } from 'react-router-dom';

class Subreddits extends Component {

  componentDidMount() {
    console.log('Subreddits.js');
    this.props.fetchMySubreddits();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.subreddits.unshift(nextProps.newPost)
  //   }
  // }

  render () {
    console.log('Subreddits.js: {subredditItems}');
    const subredditItems = this.props.subreddits.map(subreddit => (
        <option key={subreddit.id} value={subreddit.id}>{subreddit.my_subreddit_title}</option>
    ))
    return (
      <div className="subreddits">
        <select>
          <option>my subreddits</option>
          {subredditItems}
        </select>
      </div>

    )
  }
}

Subreddits.propTypes = {
  fetchSubreddits: PropTypes.func.isRequired,
  subreddits: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  subreddits: state.subreddits.items,
  newPost: state.subreddits.item
})

export default connect(mapStateToProps, { fetchMySubreddits } )(Subreddits);

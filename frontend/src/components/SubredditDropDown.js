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

  updateSubreddit = e => {
    this.props.history.push('/subreddits/' + e.target.value)
  }

  render () {
    console.log('Subreddits.js: {subredditItems}');
    const subredditItems = this.props.subreddits.map(subreddit => (
        <option key={subreddit.id} value={subreddit.id}>{subreddit.my_subreddit_title}</option>
    ))
    return (
      <div className="subreddits">
        <select onChange={this.updateSubreddit} value={this.props.selectedId} >
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
export default connect(mapStateToProps, mapDispatchToProps )(Subreddits);

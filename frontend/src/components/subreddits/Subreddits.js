import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../css/subreddits/Subreddits.css';

import { fetchMySubreddits } from '../../actions/subredditActions';

// import { SingleSubredditPosts } from './SingleSubredditPosts'
// import axios from 'axios'

import { Link } from 'react-router-dom';

class Subreddits extends Component {

  componentDidMount() {
    console.log('Subreddits.js, this.props', this.props);
    this.props.fetchMySubreddits();
  }

  // componentWillReceiveProps(nextProps) {
  //   // if (nextProps.newPost) {
  //   //   this.props.subredditList.unshift(nextProps.newPost)
  //   // }
  // }

  updateSubreddit = e => {
    console.log('e.target.value', e.target.value);
    this.props.history.push(e.target.value)
  }

  render () {
    console.log('Subreddits.js: {subredditItems}');
    const subredditItems = this.props.subredditList.map(subreddit => (
      <div className='subscribeButtonAndSubredLink'>
        <div className='subscribeButton'>
          <button type='submit'><h4>subscribe</h4></button>
        </div>
        <div className='subredditLink'>
          <h3 key={subreddit.id} value={'/subredditPosts/' + subreddit.id}><Link to=''>{subreddit.my_subreddit_title}</Link></h3>
        </div>
      </div>
      ))
      // debugger
    return (
      <div className='subredditDropDownDiv'>
        <div className="subredditDropDownDiv2">
          <div className="subredditDropDown"  >
            {/* // <select onChange='window.location.href=this.value'> */}
            <h1>MY SUBREDDITS</h1>
            {subredditItems}
            <hr />
          </div>
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
  // selectedId: ownProps.match.params.id
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMySubreddits: (id) => dispatch(fetchMySubreddits(id))
  }
}

// export default connect(mapStateToProps, { fetchMySubreddits } )(Subreddits);
export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Subreddits));

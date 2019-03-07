import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../../css/subreddits/Subreddits.css';

import { fetchMySubreddits } from '../../actions/subredditActions';
// import faker from '../../actions/subredditActions';

// import { SingleSubredditPosts } from './SingleSubredditPosts'
// import axios from 'axios'


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
    const faker = require('faker');


    const subredditItems = this.props.subredditList.map(subreddit => (
      <div className='subscribeButtonAndSubredLink'>
        <div className='subscribeButton'>
          <button type='submit'><h4>subscribe</h4></button>
        </div>
        <div className='subredditLink'>
          <h3 key={subreddit.id} value={'/subredditPosts/' + subreddit.id}><Link to=''>{subreddit.my_subreddit_title}</Link></h3>
        </div>
        <div className='subredditSummary'>
          <p>
            <Link to=''>{subreddit.my_subreddit_title}</Link> is the place to {faker.company.catchPhraseNoun()} and {faker.company.bs()}
          </p>
        </div>
        <div className='miniInfoUnderSummary'>
          <h6>{Math.floor(Math.random() * (20000000 - 700000) + 700000)} subscribers, a community for {Math.floor(Math.random() * (15 - 1) + 1)} years</h6>
        </div>

      </div>
    ))
      // debugger
    return (
      <div className=''>
        <div className="">
          <h4>MY SUBREDDITS</h4>
        </div>
        <div className='subscribeInstructions'>
          <p>
            click the <div className='subscribeWord'>subscribe</div> or <div className='subscribeWord'>unsubscribe</div> buttons to choose which subreddits appear on the home feed.
          </p>
        </div>
        <div className=""  >
          {/* // <select onChange='window.location.href=this.value'> */}
          {subredditItems}
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

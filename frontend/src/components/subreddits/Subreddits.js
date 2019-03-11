import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../../css/subreddits/Subreddits.css';

import { fetchMySubreddits } from '../../actions/subredditActions';


class Subreddits extends Component {
  constructor() {
    super();
    this.state = {
      subscribeButton: 'unsubscribe',
      locationShowing: false

    }
  }

  toggleShowing = e => {
    this.setState({ locationShowing: !this.state.locationShowing });
  };

  componentDidMount() {
    this.props.fetchMySubreddits();
  }


  updateSubreddit = e => {
    this.props.history.push(e.target.value)
  }

  render () {
    const { locationShowing } = this.state;
    const faker = require('faker');

    const subredditItems = this.props.subredditList.map(subreddit => (
      <div className='subscribeButtonAndSubredLink eachPostItemDiv'>
          <div className='subscribeButton'>

            <button onClick={this.toggleShowing}>
              {locationShowing ? "Subscribe" : "Unsubscribe"}
            </button>
          </div>


        <div className='titleSummaryMiniInfo'>
          <div className='subredditLink'>
            <h3 key={subreddit.id} value={'/subredditPosts/' + subreddit.id}><Link to={'/subredditPosts/' + subreddit.id}>{subreddit.my_subreddit_title}</Link></h3>
          </div>
          <div className='subredditSummary'>
            <p>
              <Link to={'/subredditPosts/' + subreddit.id}>{subreddit.my_subreddit_title}</Link> is the place to {faker.company.catchPhraseNoun()} and {faker.company.bs()}.
              </p>
            </div>
            <div className='miniInfoUnderSummary'>
              <h6>{Math.floor(Math.random() * (20000000 - 700000) + 700000)} subscribers, a community for {Math.floor(Math.random() * (15 - 1) + 1)} years</h6>
            </div>
        </div>

      </div>
    ))


    return (
      <div className='subredditPage'>
        <div className="allSubredditsHeading">
          <h3>ALL SUBREDDITS</h3>
        </div>
        <div className='subscribeInstructions'>
          <p>
            click the <div className='subscribeWord'>subscribe</div> or <div className='subscribeWord'>unsubscribe</div> <div>buttons</div> <div>to</div> <div>choose</div> <div>which</div> <div>subreddits</div> <div>appear</div> <div>on</div> <div>the</div> <div>home</div> <div>feed</div>.
          </p>
        </div>
        <div className=""  >
          {subredditItems}
        </div>
      </div>




    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return ({
  subredditList: state.subreddits.subredditList,
  newPost: state.subreddits.item
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMySubreddits: (id) => dispatch(fetchMySubreddits(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Subreddits));

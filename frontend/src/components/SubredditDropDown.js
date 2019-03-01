import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMySubreddits } from '../actions/subredditActions';


class SubredditDropDown extends Component {

  componentDidMount() {
    console.log('SubredditDropDown.js: componentDidMount');
    // this.props.fetchMySubreddits();
  }

  render() {
    console.log('SubredditDropDown.js: render');
    // const subredditListItems = this.props.posts.my_subreddit_title.map(title => {
    //   return <option key={title.id} value={title.id}>{title}</option>
    // })

    return (
      <div>
        <select>
          <option>My Subreddits</option>
        </select>
      </div>
    )
  }
}

//{/*
  // Subreddit Drop Down
  // <select onChange={this.renderSubredditPage} value={this.props.SOMETHING} >
  //   <option value="My Subreddits" />
  //   {subredditListItems}
  // </select>
//  */}

// SubredditDropDown.propTypes = {
//   fetchMySubreddits: PropTypes.func.isRequired,  //? where from?
// }

// const mapStateToProps = state => ({
//   posts: state.posts.items
// })

// export default connect(mapStateToProps, { SubredditDropDown } );

export default SubredditDropDown;

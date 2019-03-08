import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createPost } from '../../actions/postActions'//our action;
import '../../css/search/SearchForm.css';

// import { NavLink } from 'react-router-dom'

// import axios from 'axios';
// const faker = require('faker');

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      // body: '',
      // subreddit_title: '',
      // image_url: '',
      // date_created: Math.floor(Math.random() * 24) + ' hours ago',
      // votes: 1,
      // post_type: Math.floor(Math.random() * ['gif', 'video', 'text', 'wiki', 'image'].length),
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const searchBody = {
      searchInput: this.state.searchText,
      // post_body: this.state.body,
      // image_url: this.state.image_url,
      // my_subreddit_title: this.state.subreddit_title,
    }

    // Call Action (postActions)
    // this.props.search(searchBody)

  }

  render () {

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <br />
          <div className='searchBox'>
            <div className='searchInput'>
              <input type='text' name='searchText' onChange={this.onChange} value={this.state.searchText} placeholder='Search' />
            </div>
            <div className='searchButton'>
              <input type='submit' name='submit' value='submit' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

// SearchForm.propTypes = {
//   search: PropTypes.func.isRequired
// }

// export default connect(null, { search })(SearchForm);
export default SearchForm;

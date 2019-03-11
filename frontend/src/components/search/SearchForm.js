import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../../css/search/SearchForm.css';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
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

    }

    this.props.search(searchBody)

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

const mapStateToProps = state => ({

})


const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

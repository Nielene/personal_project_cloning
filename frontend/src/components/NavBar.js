import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SubredditDropDown from './subreddits/SubredditDropDown'
import '../css/NavBar.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../actions/userActions'



const mapStateToProps = state => ({
  isLoggedIn: state.users.isLoggedIn,
  user: state.users.user
})

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user))
  }
}



class NavBar extends Component {
  render() {
    console.log('isLoggedIn', this.props.isLoggedIn); // true
    console.log('login', this.props.login);
    console.log('user.username', this.props.user.username); //'Thomas'

    return (
      <nav>
        <SubredditDropDown />
        <div className = 'NavLinkDiv' >
          <div className='logoReReddit_usernameAndLogin'>
            <NavLink to={'/'} style={{ textDecoration: 'none' }}>
              <div className='logoReReddit'>
                <img alt='' height='50' width='50' src='http://i.imgur.com/sdO8tAw.png' />
                <h4>ReReddit</h4>
              </div>
            </NavLink>

            <div className='usernameAndLogin'>
              <div>
                <Link to=''><h4>   {this.props.user.username}   </h4></Link>
              </div>
              <div className='loginButton'>
                <Link to='/signup'><button><h4>Sign Up</h4></button></Link>
              </div>
              <div className='loginButton'>
                <Link to='/login'><button><h4>Login</h4></button></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

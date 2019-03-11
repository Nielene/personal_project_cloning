import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SubredditDropDown from './subreddits/SubredditDropDown'
import '../css/NavBar.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { checkAuthenticateStatus } from '../actions/userActions';
import { logout } from '../actions/userActions';



const mapStateToProps = state => ({
  isLoggedIn: state.users.isLoggedIn,
  user: state.users.user
})

const mapDispatchToProps = dispatch => {
  return {
    checkAuthenticateStatus: () => dispatch(checkAuthenticateStatus()),
    logout: () => dispatch(logout()),
  }
}




class NavBar extends Component {

  componentDidMount () {
    this.props.checkAuthenticateStatus();
  }


  onSubmitLogout = (e) => {
    e.preventDefault();

    console.log("Hello?")

    this.props.logout();

    const goodbyeMessage = function () {
      alert(
        `You are now logged out! \n
        Come back soon!`
      )
    }
    goodbyeMessage();
  }


  render() {

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
                <Link to=''><h4>   {this.props.isLoggedIn ? this.props.user.username : null }   </h4></Link>
              </div>
              <div className='loginButton'>
                <Link to='/signup'><button><h4>Sign Up </h4></button></Link>
              </div>
              <div className='loginButton'>
                <Link to='/login'><button><h4>Login</h4></button></Link>
              </div>

              <div className='loginButton' >
                <button onClick={this.onSubmitLogout}><h4>Logout</h4></button>
              </div>

            </div>
          </div>
        </div>
      </nav>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

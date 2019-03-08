import React from 'react';
import { NavLink } from 'react-router-dom';
import SubredditDropDown from './subreddits/SubredditDropDown'
import '../css/NavBar.css';
import { Link } from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav>
      <SubredditDropDown />
      <div className = 'NavLinkDiv' >
          <div className='logoReReddit_usernameAndLogin'>
            <NavLink to={'/'}>
              <div className='logoReReddit'>
                <img alt='' height='50' width='50' src='http://i.imgur.com/sdO8tAw.png' />
                <h4>ReReddit</h4>
              </div>
            </NavLink>

            <div className='usernameAndLogin'>
              <div>
                <Link to=''><h4>**username**</h4></Link>
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

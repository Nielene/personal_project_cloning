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
        <NavLink to={'/'}>
          <div className='logoReReddit_usernameAndLogin'>
            <div className='logoReReddit'>
              <img alt='' height='50' width='50' src='http://i.imgur.com/sdO8tAw.png' />
              <h4>ReReddit</h4>
            </div>

            <div className='usernameAndLogin'>
              <div>
                <Link to=''><h4>**USERNAME**</h4></Link>
              </div>
              <div>
                <Link to=''><h4>**LOGOUT**</h4></Link>
              </div>
            </div>
          </div>


        </NavLink>
      </div>
    </nav>
  )
}

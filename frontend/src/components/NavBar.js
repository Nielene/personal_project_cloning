import React from 'react';
import { NavLink } from 'react-router-dom';
import SubredditDropDown from './subreddits/SubredditDropDown'

export const NavBar = () => {
  return (
    <nav>
      <SubredditDropDown />
      <NavLink to={'/'}>ReReddit</NavLink>
    </nav>
  )
}

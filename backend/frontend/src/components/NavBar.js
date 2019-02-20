import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/NavBar.css';

export const NavBar = () => {
  return (
    <nav>
      <NavLink to= { '/'}> <img src='https://cdn.freebiesupply.com/images/thumbs/2x/reddit-logo.png' alt=''/> </NavLink>
    </nav>
  )
}

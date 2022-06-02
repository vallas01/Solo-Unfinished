import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
          <NavLink className='login-btn' to="/login">Log In</NavLink>
          <NavLink className='signup-btn' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='btn-container'>

      {/* <ul>
        <li> */}
          <NavLink className='login-btn' exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        {/* </li>
      </ul> */}
    </div>
  );
}

export default Navigation;

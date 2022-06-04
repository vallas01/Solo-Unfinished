import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import '../button.css'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className='marina-btn' to="/marinas">Marinas</NavLink>
        <NavLink className='marina-btn' to="/new">Add</NavLink>
        <ProfileButton user={sessionUser} />

      </>
    );
  } else {
    sessionLinks = (
      <>
          <NavLink className='marina-btn' to="/marinas">Marinas</NavLink>
          <NavLink className='login-btn' to="/login">Login</NavLink>
          <NavLink className='signup-btn' to="/signup">Sign Up</NavLink>
          <div>

          </div>
      </>
    );
  }

  return (
    <div className='btn-container'>


          <NavLink className='login-btn' exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}

    </div>
  );
}

export default Navigation;

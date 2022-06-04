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
        <ProfileButton user={sessionUser} />
        <NavLink className='marina-btn' to="/new">Add</NavLink>
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

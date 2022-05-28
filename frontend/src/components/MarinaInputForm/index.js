import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './MarinaInputForm.css';

function MarinaInputForm() {
  const sessionUser = useSelector(state => state.session.user);

  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState([]);
  const [cost, setCost] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState([]);
  const [imagePath, setImagePath] = useState([]);

  const dispatch = useDispatch();


//   if (sessionUser) return (
//     <Redirect to="/" />
//   );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMarina = {
        name,
        state,
        country,
        cost,
        longitude,
        latitude,
        imagePath
    };
    dispatch(addMarina(newMarina));
    reset();
  };

  const reset = () => {
      setName('');
      setState('');
      setCountry('');
      setCost('');
      setLongitude('');
      setLatitude('');
      setImagePath('')
  }

  return (
    <div className='inputBox'>
        <h1>Add a Marina</h1>
        <form onSubmit={handleSubmit}>
        
        <label>
            Username or Email
            <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            />
        </label>
        <label>
            Password
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </label>
        <button type="submit">Log In</button>
        </form>
    </div>
  );
}

export default MarinaInputForm;

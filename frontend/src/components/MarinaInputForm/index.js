import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { addMarina} from '../../store/marinaReducer'
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
            Marina Name
            <input
            type="text"
            name='name'
            placeholder='Marina'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </label>
        <label>
            State
            <input
            type="text"
            name='state'
            placeholder='Florida'
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            />
        </label>
        <label>
            Country
            <input
            type="text"
            name='country'
            placeholder='USA'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            />
        </label>
        <label>
            Slip Cost per Foot
            <input
            type="integer"
            name='cost'
            placeholder=''
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
            />
        </label>
        <div className='coordinatesBox'>
            <h2>Coodinates</h2>
            <label>
                Latitude
                <input
                type="integer"
                name='latitude'
                placeholder=''
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
                />
            </label>
            <label>
                Longitude
                <input
                type="integer"
                name='longitude'
                placeholder=''
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
                />
            </label>
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default MarinaInputForm;

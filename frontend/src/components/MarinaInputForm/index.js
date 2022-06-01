import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { createMarina} from '../../store/marinaReducer'
import './MarinaInputForm.css';

function MarinaInputForm() {
    // eslint-disable-next-line
  const sessionUser = useSelector(state => state.session.user);

  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState([]);
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const []
  const [state, setState] = useState('');
  const [country, setCountry] = useState([]);
  const [lng, setLng] = useState('');
  const [lat, setLat] = useState([]);

  const dispatch = useDispatch();


//   if (sessionUser) return (
//     <Redirect to="/" />
//   );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMarina = {
        name,
        imgUrl,
        cost,
        description,
        address,
        city,
        state,
        country,
        lng,
        lat,
    };
    dispatch(createMarina(newMarina));
    reset();
  };

  const reset = () => {
      setName('');
      setImgUrl('');
      setCost('');
      setDescription('');
      setAddress('');
      setCity('');
      setState('');
      setCountry('');
      setCost('');
      setLng('');
      setLat('');
  }

  return (
    <div className='container'>
        <div>
            <h1>Add a Marina</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='cell'>
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
        </div>
        <div className='cell'>
            <label>
                State
                <input
                type="text"
                name='state'
                placeholder='e.g. Florida'
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                />
            </label>
        </div>
        <div className='cell'>
            <label>
                Country
                <input
                type="text"
                name='country'
                placeholder='e.g. USA'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                />
            </label>
        </div>
        <div className='cell'>
            <label>
                Slip Cost per Foot
                <input
                type="integer"
                name='cost'
                placeholder='e.g. 2.20'
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                required
                />
            </label>
        </div>
        <div className='cell'>
            <label>
                lat
                <input
                type="integer"
                name='lat'
                placeholder=''
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                required
                />
            </label>
        </div>
        <div className='cell'>
            <label>
                lng
                <input
                type="integer"
                name='lng'
                placeholder=''
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                required
                />
            </label>
        </div>



        <div className='cell'>
            <label>
                Url for an Image
                <input
                type="text"
                name='imgUrl'
                placeholder='http://...'
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
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

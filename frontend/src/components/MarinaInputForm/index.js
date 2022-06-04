import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { createMarina} from '../../store/marinaReducer'
import './MarinaInputForm.css';
import '../button.css'

function MarinaInputForm() {
    // eslint-disable-next-line
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()

  const [ownerId, setOwnerId] = useState(1)
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const dispatch = useDispatch();


//   if (sessionUser) return (
//     <Redirect to="/" />
//   );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMarina = {
        ownerId,
        name,
        imgUrl,
        cost,
        description,
        address,
        city,
        state,
        country,
        lat,
        lng,
    };
    let doneMarina = dispatch(createMarina(newMarina));

    reset();

    if (doneMarina) {
        // history.push(`/marinas/${editedMarina.id}`);
        history.push(`/marinas`);
    }
  };

  const reset = () => {
      setOwnerId('');
      setName('');
      setImgUrl('');
      setCost('');
      setDescription('');
      setAddress('');
      setCity('');
      setState('');
      setCountry('');
      setCost('');
      setLat('');
      setLng('');
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
        <div className='inputform'>
            <div className='MarinaHeader'>
                Add a Marina
            </div>

            <div className='lrcontainer'>
                <div className='leftContainer'>
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
                        State/Province
                        <input
                        type="text"
                        name='state'
                        placeholder='e.g. Florida'
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
                        placeholder='e.g. USA'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                        />
                    </label>
                </div>

                <div className='rightContainer'>
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
                    <label>
                        Latitide
                        <input
                        type="integer"
                        name='lat'
                        placeholder=''
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        Longitude
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
            </div>
            <div className='urlBox'>
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
        </div>
        <div className='marinaButton'>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  );
}

export default MarinaInputForm;

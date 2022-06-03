import React, { useEffect, useState } from 'react';
import './MarinaPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getMarinas, updateMarinaDetails } from '../../store/marinaReducer'
// import { Redirect } from 'react-router-dom';
// import * as sessionActions from '../../store/session';

function MarinaPage() {
    const dispatch = useDispatch();
    const { marinaId } = useParams();
    const marinas = useSelector(state => state.marina);
    const history = useHistory();

    const marina = marinas[marinaId]

    // const userId = useSelector(state => {
    //     return state.session.user.id
    // });


    useEffect(() => {
        dispatch(getMarinas());
    }, [dispatch])

    // eslint-disable-next-line
    const [id, setId] = useState('')
    // eslint-disable-next-line
    const [ownerId, setOwnerId] = useState('')
// eslint-disable-next-line
    const [name, setName] = useState('');
// eslint-disable-next-line
    const [imgUrl, setImgUrl] = useState('');
    const [cost, setCost] = useState('');
// eslint-disable-next-line
    const [description, setDescription] = useState('');
// eslint-disable-next-line
    const [address, setAddress] = useState('');
// eslint-disable-next-line
    const [city, setCity] = useState('');
// eslint-disable-next-line
    const [state, setState] = useState('');
// eslint-disable-next-line
    const [country, setCountry] = useState('');
// eslint-disable-next-line
    const [lat, setLat] = useState('');
// eslint-disable-next-line
    const [lng, setLng] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: marina.id,
            ownerId: marina.ownerId,
            name : marina.name,
            imgUrl : marina.imgUrl,
            cost,
            description : marina.description,
            address: marina.address,
            city: marina.city,
            state : marina.state,
            country : marina.country,
            lat : marina.lat,
            lng : marina.lng,
        };
 
        let editedMarina = dispatch(updateMarinaDetails(payload))

        if (editedMarina) {
          history.push(`/marinas/${editedMarina.id}`);
        }
      };


    // const deleteThisMarina = (e) => {
    //     e.preventDefault();
    //     dispatch(deleteMarina(marinaId));
    //     history.push(`/`);
    // }

    return (
          <div className='containerEdit'>

            <form className='edit-form' onSubmit={handleSubmit}>
              <h2>Update the Slip Cost per Foot</h2>
            {/* <input
              type="hidden"
              min="1"
              required
              value={userId}
              /> */}

            <label>

              <input
                type="integer"
                name='cost'
                required
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />

            </label>

            <button className='edit-marina-btn' type="submit">Edit Cost</button>
          </form>



        </div>
    )
}

export default MarinaPage;

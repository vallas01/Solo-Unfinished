import React, { useEffect, useState } from 'react';
import './MarinaPage.css';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import { getMarinas, updateMarinaDetails } from '../../store/marinaReducer'

function MarinaPage() {
    const dispatch = useDispatch();
     // eslint-disable-next-line
    const { marinaId } = useParams();

    const marinas = useSelector(state => state.marina);
    const history = useHistory();


    // const userId = useSelector(state => {
      //     return state.session.user.id
      // });
      // console.log(userId)

      useEffect(() => {
        dispatch(getMarinas());
    }, [dispatch])

    // eslint-disable-next-line
    const [id, setId] = useState(marinas.id)
    console.log(`id =====>  ${id}`)
    // eslint-disable-next-line
    const [ownerId, setOwnerId] = useState(marinas.ownerId)
// eslint-disable-next-line
    const [name, setName] = useState(marinas.name);
// eslint-disable-next-line
    const [imgUrl, setImgUrl] = useState(marinas.imgUrl);
    const [cost, setCost] = useState(marinas.cost);
// eslint-disable-next-line
    const [description, setDescription] = useState(marinas.description);
// eslint-disable-next-line
    const [address, setAddress] = useState(marinas.address);
// eslint-disable-next-line
    const [city, setCity] = useState(marinas.city);
// eslint-disable-next-line
    const [state, setState] = useState(marinas.state);
// eslint-disable-next-line
    const [country, setCountry] = useState(marinas.country);
// eslint-disable-next-line
    const [lat, setLat] = useState(marinas.lat);
// eslint-disable-next-line
    const [lng, setLng] = useState(marinas.lng);

    // const updateName = (e) => setName(e.target.value);
    const updateCost = (e) => setCost(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id,
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
              <h2>{marinas.name}</h2>
            {/* <input
              type="hidden"
              min="1"
              required
              value={userId}
              /> */}
            {/* <label>
              Update the Marina Name
              <input
                type="text"
                name='name'
                placeholder=''
                value={name}
                required
                onChange={updateName}
              />
            </label> */}
            <label>
              Update the Slip Cost per Foot
              <input
                type="integer"
                name='cost'
                required
                value={cost}
                onChange={updateCost}
              />
            </label>

            <button className='edit-marina-btn' type="submit">Edit Marina</button>
          </form>



        </div>
    )
}

export default MarinaPage;

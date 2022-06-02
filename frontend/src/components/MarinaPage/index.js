import React, { useEffect, useState } from 'react';
import './MarinaPage.css';
// import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { useHistory, useParams } from 'react-router-dom';
import { getOneMarina, updateMarinaDetails } from '../../store/marinaReducer'

function MarinaPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { marinaId } = useParams();

    const currentMarina = useSelector(state => {
        return state.marinas.currentMarina;
    });

    // const userId = useSelector(state => {
    //     return state.session.user.id
    // });

    useEffect(() => {
        dispatch(getOneMarina());
    }, [dispatch, marinaId])

    const [ownerId, setOwnerId] = useState(1)
    const [name, setName] = useState(currentMarina.name);
    const [imgUrl, setImgUrl] = useState(currentMarina.imgUrl);
    const [cost, setCost] = useState(currentMarina.cost);
    const [description, setDescription] = useState(currentMarina.description);
    const [address, setAddress] = useState(currentMarina.address);
    const [city, setCity] = useState(currentMarina.city);
    const [state, setState] = useState(currentMarina.state);
    const [country, setCountry] = useState(currentMarina.country);
    const [lat, setLat] = useState(currentMarina.lat);
    const [lng, setLng] = useState(currentMarina.lng);

    const updateName = (e) => setName(e.target.value);
    const updateCost = (e) => setCost(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
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

        let editedMarina = await dispatch(updateMarinaDetails(payload))

        if (editedMarina) {
          history.push(`/marinas/${editedMarinas.id}`);
        }
      };


    const deleteThisMarina = (e) => {
        e.preventDefault();
        dispatch(deleteMarina(marinaId));
        history.push(`/`);
    }

    return (
          <>
            <div>
                Hello You Beautiful Component
            </div>

            <form className='form' onSubmit={handleSubmit}>
            {/* <input
              type="hidden"
              min="1"
              required
              value={userId}
              /> */}
            <input
              type="text"
              placeholder="Marina Name"
              required
              value={name}
              onChange={updateName}
              className='edit-input'/>

            <button className='edit-marina-btn' type="submit">Edit Marina</button>
          </form>

            <div>
                {/* {userId && userId === review?.userId && (//TODO Add Link here ) } */}
                <Link to={`/marinas/${marinaId}/reviews/${review?.id}/edit`}>
                    <button value={review.id} className="review-edit red-hover-effect">Edit</button>
                </Link>

                {/* {userId && userId === review?.userId && (//TODO Add Button here ) } */}
                (<button value={marina.id} className="delete-button red-hover-effect" onClick={deleteThisMarina}>Delete</button>)

            </div>

        </>
    )
}

export default MarinaPage;

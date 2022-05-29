import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './MarinaPage.css';
import { loadMarinas } from '../../store/marinaReducer'

function MarinaPage() {
    const dispatch = useDispatch();
    const marinas = useSelector((state) => Object.values(state.marina));

    useEffect(() => {
        dispatch(loadMarinas());
    }, [dispatch])
 
    return (

        <div className='marinaBlock'>
            <h1>Marinas</h1>
            <div>

                {/* {marinas.map(marina => {
                    return (
                        <div key={`div${marina.id}`}className={`div${marina.id}`}>

                        <img key={`image${marina.id}`} src={marina.imagePath} />
                        <h2>Restaurant Name</h2>
                        <ul className='businessTitle' key={`title${marina.id}`}>{marina.name}</ul>
                        <h2>Description</h2>
                        <li key={`description${marina.id}`}>
                            {marina.longitude}
                        </li>

                        </div>

                    )
                })} */}

            </div>
        </div>
    )
}

export default MarinaPage;

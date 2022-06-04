import React from 'react';
import './SplashPage.css';
import '../button.css';


function SplashPage() {


    return (
        <div className='splash-container'>
            <div className='Title'>Find yourself on the water</div>
            <p className='Title-tag'>Discover and book a slip, restaurant dock, mooring and enjoy.</p>
            <div className='img-container'>
                <img className='img-sail' src= {require("./AstonMartin.jpg")}  alt='sailboat'></img>
            </div>
        </div>
    );
}

export default SplashPage;

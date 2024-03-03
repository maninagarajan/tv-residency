import React from 'react';
import './gopuram.css';

export const GopuramView = () => {
    return (
        <div className='gopuramContainer'>
            <img
                src={require('../../../assets/images/Home/gopuram_view.png')}
                alt='Gopuram view'
                className='mobileImg'
            />
            <div className='gopuramTextView'>
                <span>Amirthakadeswarar Temple View</span>
                <span>From our Hotel</span>
                <div>
                    <h1>கோபுர தரிசனம்</h1>
                    <h1>கோடி புண்ணியம்</h1>
                </div>
                <p>(Gopura Dharisanam Kodi Punniyam)</p>
            </div>
            <img
                src={require('../../../assets/images/Home/gopuram_view.png')}
                alt='Gopuram view'
                className='desktopImg'
            />
        </div>
    )
}
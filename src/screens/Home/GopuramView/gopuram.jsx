import React from 'react';
import './gopuram.css';
import gopuramImg from '../../../assets/images/Home/gopuram_view.png'

export const GopuramView = () => {
    return (
        <div className='gopuramContainer'>
            <img
                src={gopuramImg}
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
                src={gopuramImg}
                alt='Gopuram view'
                className='desktopImg'
            />
        </div>
    )
}
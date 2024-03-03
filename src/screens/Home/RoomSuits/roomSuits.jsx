
import React from 'react';
import './roomSuits.css';
import timeImg from '../../../assets/images/time.png'

export const RoomsSuits = () => {
    return (
        <div className='roomsContainer'>
            <h1 className='sectionHeaderText'>Timings</h1>
            <div className='timingContainer'>
                <div className='timingDiv'>
                    <img src={timeImg} alt='time' />
                    <span>Check in Time - 4.00pm</span>
                </div>
                <div className='timingDiv'>
                    <img src={timeImg} alt='time' />
                    <span>Check out Time - 3.00pm</span>
                </div>
            </div>

            <h1 className='roomSectionHeaderText'>Rooms & Suits</h1>
        </div>
    )
}
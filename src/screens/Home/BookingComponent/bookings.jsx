import React from 'react';
import './bookings.css';
import { bookingMsg } from '../../../constants/info';

export const BookingSection = () => {

    const iframe = () => {
        return {
            __html: `<iframe src="./booking.html" allowfullscreen></iframe>`
        }
    }

    return (
        <div className='bookingContainer'>
            <h1 className='sectionHeaderText'>Room Booking</h1>
            <div className='rowBooking'>
                <p>{bookingMsg}</p>
                <div dangerouslySetInnerHTML={iframe()} />
            </div>
        </div>
    )
}
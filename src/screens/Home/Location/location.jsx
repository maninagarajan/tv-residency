
import React from 'react';
import './location.css';
import MapImage from '../../../assets/images/Home/location.png'
import locationIcon from '../../../assets/images/location.png'
import phoneIcon from '../../../assets/images/phone.png'
import whatsappIcon from '../../../assets/images/whatsapp.png'
import mailIcon from '../../../assets/images/mail.png'
import { address, email, phoneNumber, whatsAppNumber } from '../../../constants/info';

export const LocationCard = () => {
    return (
        <div className='locationContainer'>
            <h1 className='sectionHeaderText'>Location</h1>

            <div className='mapContainer'>
                <img src={MapImage} alt="map" />

                <div className='mapTextContainer'>
                    <h4>Location</h4>
                    <div className='locationRow'>
                        <img src={locationIcon} alt={'location-pin'} />
                        <div>
                        <p>{address.split(',')[0]},</p>
                        <p>{address.split(',')[1]},</p>
                        <p>{address.split(',')[2]}</p><br />
                        </div>
                    </div>

                    <h4 className='locationHeader'>Hotel Contact Details</h4>
                    <div className='locationRow'>
                        <img src={phoneIcon} alt={'phone-icon'} />
                        <p>{phoneNumber}</p>
                    </div>

                    <div className='locationRow'>
                        <img src={whatsappIcon} alt={'whatsapp-icon'} />
                        <p>{whatsAppNumber}</p>
                    </div>

                    <div className='locationRow'>
                        <img src={mailIcon} alt={'email-icon'} />
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './contactUs.css';
import TopImg from '../../assets/images/Contact/Contact_Top.png';
import HotelImg from '../../assets/images/Contact/Hotel_Front.png';
import locationIcon from '../../assets/images/location.png'
import phoneIcon from '../../assets/images/phone.png'
import whatsappIcon from '../../assets/images/whatsapp.png'
import mailIcon from '../../assets/images/mail.png'
import { address, email, phoneNumber, whatsAppNumber } from '../../constants/info';

export const ContactUsComponent = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='screenTop'>
                <img src={TopImg} alt='Contact-Us' />
                <div>
                    <h2>Contact us</h2>
                </div>
            </div>

            <div className='contactMainContainer'>
                <div className='leftContactDiv'>
                    <h1 className='sectionHeaderText'>Address</h1>
                    <div className='locationRow'>
                        <img src={locationIcon} alt={'location-pin'} />
                        <div>
                            <p>{address.split(',')[0]},</p>
                            <p>{address.split(',')[1]},</p>
                            <p>{address.split(',')[2]}</p><br />
                        </div>
                    </div>
                    <h1 className='sectionHeaderText'>Phone Number</h1>
                    <div className='locationRow'>
                        <img src={phoneIcon} alt={'phone-icon'} />
                        <p>{phoneNumber}</p>
                    </div>

                    <div className='locationRow'>
                        <img src={whatsappIcon} alt={'whatsapp-icon'} />
                        <p>{whatsAppNumber}</p>
                    </div>

                    <h1 className='sectionHeaderText'>E-mail Address</h1>
                    <div className='locationRow'>
                        <img src={mailIcon} alt={'email-icon'} />
                        <p>{email}</p>
                    </div>
                </div>

                <div className='rightContactDiv'>
                    <img src={HotelImg} alt="hotel" />
                </div>
            </div>
        </div>
    )
}
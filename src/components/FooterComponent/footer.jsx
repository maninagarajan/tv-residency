import React from 'react';
import './footer.css';
import LogoImg from '../../assets/images/Logo_White.png'
import { address, email, phoneNumber, whatsAppNumber } from '../../constants/info';
import locationIcon from '../../assets/images/location.png'
import phoneIcon from '../../assets/images/phone.png'
import whatsappIcon from '../../assets/images/whatsapp.png'
import mailIcon from '../../assets/images/mail.png'

export const FooterComponent = () => {
    return (
        <div className='footerContainer'>
            <div className='topFooter'>
                <img src={LogoImg} alt='Temple View Residency' className='footer-logo' />

                <div className='reachSection'>
                    <h3>Reach us</h3>
                    <div className='locationRow'>
                        <img src={locationIcon} alt={'location-pin'} />
                        <div>
                            <p>{address.split(',')[0]},</p>
                            <p>{address.split(',')[1]},</p>
                            <p>{address.split(',')[2]}</p><br />
                        </div>
                    </div>
                </div>

                <div className='reachSection contactSection'>
                    <h3>Contact</h3>
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

            <div className='bottomFooter'>
                <p>Copyright &#169; 2024 All Reserved Temple View Residency</p>
                <p>Developed by <span>Naga Web Solutions</span></p>
                <p>Designed by <span>VR Design Studio</span></p>
            </div>
        </div>
    )
}
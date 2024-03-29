import React from 'react';
import './footer.css';
import LogoImg from '../../assets/images/Logo_White.png'
import { address, email, facebookLink, instagramLink, phoneNumber, whatsAppLink, whatsAppNumber } from '../../constants/info';
import locationIcon from '../../assets/images/location.png'
import phoneIcon from '../../assets/images/phone.png'
import whatsappIcon from '../../assets/images/whatsapp.png'
import mailIcon from '../../assets/images/mail.png'
import { Tooltip } from '@mui/material';
import FacebookIcon from '../../assets/images/facebook.png'
import InstagramIcon from '../../assets/images/instagram.png'

export const FooterComponent = () => {
    return (
        <div className='footerContainer'>
            <div className='topFooter'>
                <div className='logoSection'>
                    <img src={LogoImg} alt='Temple View Residency' className='footer-logo' />
                </div>

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
                        <Tooltip title="Open Dialer" placement='right'>
                            <p className='whatsappNumber' onClick={() => window.open('tel:' + phoneNumber)}>{phoneNumber}</p>
                        </Tooltip>
                    </div>

                    <div className='locationRow'>
                        <img src={whatsappIcon} alt={'whatsapp-icon'} />
                        <Tooltip title="Open Whatsapp" placement='right'>
                            <p className='whatsappNumber' onClick={() => window.open(whatsAppLink)}>{whatsAppNumber}</p>
                        </Tooltip>
                    </div>

                    <div className='locationRow'>
                        <img src={mailIcon} alt={'email-icon'} />
                        <Tooltip title="Open Mail" placement='right'>
                            <p className='whatsappNumber' onClick={() => window.open('mailto:' + email)}>{email}</p>
                        </Tooltip>
                    </div>
                </div>

                <div className='reachSection'>
                    <h3>Follow us</h3>
                    <a className='socialMediaDiv facebookDiv' href={facebookLink} target='_blank'>
                        <img src={FacebookIcon} alt="facebook" />
                        <p>Facebook</p>
                    </a>
                    <a className='socialMediaDiv instagramDiv' href={instagramLink} target='_blank'>
                        <img src={InstagramIcon} alt="instagram" />
                        <p>Instagram</p>
                    </a>
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
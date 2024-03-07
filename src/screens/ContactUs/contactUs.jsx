import React, { useState } from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './contactUs.css';
import TopImg from '../../assets/images/Contact/Contact_Top.png';
import locationIcon from '../../assets/images/location.png'
import phoneIcon from '../../assets/images/phone.png'
import whatsappIcon from '../../assets/images/whatsapp.png'
import mailIcon from '../../assets/images/mail.png'
import { address, email, phoneNumber, whatsAppLink, whatsAppNumber } from '../../constants/info';
import { Tooltip } from '@mui/material';
import moment from 'moment';

export const isNotValid = (value) => value === null || value === "" || value === undefined;

export const ContactUsComponent = () => {
    const [userName, setUserName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [userMail, setUserMail] = useState("")
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [guestCount, setGuestCount] = useState("")
    const [userMessage, setUserMessage] = useState("")

    const [userNameError, setUserNameError] = useState(false)
    const [contactNumberError, setContactNumberError] = useState(false)
    const [userMailError, setUserMailError] = useState(false)
    const [fromDateError, setFromDateError] = useState(false)
    const [toDateError, setToDateError] = useState(false)
    const [guestCountError, setGuestCountError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        let isValid = true
        if (isNotValid(userName)) {
            setUserNameError(true)
            isValid = false
        }
        if (isNotValid(contactNumber)) {
            setContactNumberError(true)
            isValid = false
        }
        if (isNotValid(userMail)) {
            setUserMailError(true)
            isValid = false
        }
        if (isNotValid(fromDate)) {
            setFromDateError(true)
            isValid = false
        }
        if (isNotValid(toDate)) {
            setToDateError(true)
            isValid = false
        }
        if (isNotValid(guestCount)) {
            setGuestCountError(true)
            isValid = false
        }

        if (isValid) {
            console.log({
                "name": userName,
                "contact": contactNumber,
                "email": userMail,
                "check-in": fromDate,
                "check-out": toDate,
                "number of guests": guestCount,
                "message": userMessage
            })

            let message = `, I would like to check the availability on the below mentioned dates. \nName: ${userName} \nPhone Number: ${contactNumber} \nEmail: ${userMail} \nNumber of Guests: ${guestCount} \nCheck-In Date: ${moment(fromDate).format('DD MMM YYYY')} \nCheck-out Date: ${moment(toDate).format('DD MMM YYYY')} \n${userMessage ? 'Message: ' + userMessage : ''}`

            window.open(encodeURI(whatsAppLink + message))
        }
    }

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

                    <h1 className='sectionHeaderText'>E-mail Address</h1>
                    <div className='locationRow'>
                        <img src={mailIcon} alt={'email-icon'} />
                        <Tooltip title="Open Mail" placement='right'>
                            <p className='whatsappNumber' onClick={() => window.open('mailto:' + email)}>{email}</p>
                        </Tooltip>
                    </div>
                </div>

                <div className='rightContactDiv'>
                    <div className='glassCard'>
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <h2>Get in Touch</h2>
                            <input
                                type="text"
                                required
                                placeholder="Your Name"
                                value={userName}
                                onChange={e => {
                                    setUserName(e.target.value)
                                    if (e.target.value?.length) {
                                        setUserNameError(false)
                                    }
                                }}
                            />
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                required
                                value={contactNumber}
                                onChange={e => {
                                    let onlyNum = e.target.value?.replace(/\D/g, '')
                                    let val = onlyNum?.replace(/ /gm, '');
                                    let num = `${val.substring(0, 3)} ${val.substring(3, 6)} ${val.substring(6, val.length)}`;

                                    num = num.trim();
                                    setContactNumber(num)
                                    if (e.target.value?.length) {
                                        setContactNumberError(false)
                                    }
                                }}
                                size="small"
                                maxLength={12}
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                value={userMail}
                                onChange={e => {
                                    setUserMail(e.target.value)
                                    if (e.target.value?.length) {
                                        setUserMailError(false)
                                    }
                                }}
                            />

                            <div className='formDateDiv'>
                                <span>Check-in Date:</span>
                                <input
                                    type="date"
                                    placeholder="Check-in Date"
                                    required
                                    value={fromDate}
                                    onChange={e => {
                                        setFromDate(e.target.value)
                                        if (e.target.value?.length) {
                                            setFromDateError(false)
                                        }
                                    }}
                                />
                            </div>
                            <div className='formDateDiv'>
                                <span>Check-out Date:</span>
                                <input
                                    type="date"
                                    placeholder="Check-out Date"
                                    required
                                    value={toDate}
                                    onChange={e => {
                                        setToDate(e.target.value)
                                        if (e.target.value?.length) {
                                            setToDateError(false)
                                        }
                                    }}
                                />
                            </div>
                            <input
                                type="number"
                                placeholder="No. of Guests"
                                required
                                value={guestCount}
                                onChange={e => {
                                    setGuestCount(e.target.value)
                                    if (e.target.value?.length) {
                                        setGuestCountError(false)
                                    }
                                }}
                            />
                            <textarea
                                type="text"
                                placeholder="Message (Optional)"
                                value={userMessage}
                                onChange={e => {
                                    setUserMessage(e.target.value)
                                }}
                            />
                            <button type="submit">Send Message <img src={whatsappIcon} alt="whatsapp-icon" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
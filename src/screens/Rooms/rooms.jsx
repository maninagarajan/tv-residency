import React from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './rooms.css';
import TopImg from '../../assets/images/Rooms/Rooms_Top.png';
import { roomsList } from '../../constants/info';
import { Card } from '@mui/material';
import Room_1 from '../../assets/images/Rooms/room_1.png'
import Room_2 from '../../assets/images/Rooms/room_2.png'
import Room_3 from '../../assets/images/Rooms/room_3.png'
import Room_4 from '../../assets/images/Rooms/room_4.png'
import memberIcon from '../../assets/images/Rooms/member.png'
import bedIcon from '../../assets/images/Rooms/bed.png'
import wifiIcon from '../../assets/images/Rooms/wifi.png'
import heater from '../../assets/images/Rooms/heater.png'
import bedsIcon from '../../assets/images/Rooms/beds.png'
import tvIcon from '../../assets/images/Rooms/tv.png'
import alertIcon from '../../assets/images/alert.png'
import { NavLink } from 'react-router-dom';

const RoomItem = ({ item, index }) => {
    const getImage = () => {
        if (index == 0) {
            return Room_1
        } else if (index == 1) {
            return Room_2
        } else if (index == 2) {
            return Room_3
        } else {
            return Room_4
        }
    }
    return <Card className={`roomMainCard ${index % 2 == 0 ? '' : 'roomMainCardRight'}`}>
        {index % 2 == 0 ? <div>
            <img src={getImage()} alt={`room_${index}`} className='roomMainImg' />
        </div> : <></>}
        <div className='roomRightContainer'>
            <div className='roomTextView'>
                <h3>{item.room}</h3>
            </div>
            <h4>₹{item.price} <span>(Incl. GST)</span></h4>

            <div className='mainIconText'>
                <div className='iconTextSection'>
                    <div className='bottomIconView'>
                        <img src={memberIcon} alt="member" />
                        <span>Upto {item.maxCount} members</span>
                    </div>

                    <div className='bottomIconView'>
                        <img src={bedIcon} alt="bed" />
                        <span>{item.extraBedAvailable}</span>
                    </div>

                    <div className='bottomIconView'>
                        <img src={tvIcon} alt="tv" />
                        <span>{item.tv}</span>
                    </div>
                </div>
                <div className='iconTextSection'>
                    <div className='bottomIconView'>
                        <img src={wifiIcon} alt="wifi" />
                        <span>{item.wifiConnectivity}</span>
                    </div>

                    <div className='bottomIconView'>
                        <img src={bedsIcon} alt="beds" />
                        <span>{item.bedCount} King size bed</span>
                    </div>

                    <div className='bottomIconView'>
                        <img src={heater} alt="heater" />
                        <span>{item.heater}</span>
                    </div>
                </div>
            </div>
            <span className='bookingsText'>For bookings, <NavLink to={'/contact'}>Contact us</NavLink></span>
            <div className='alertSection'>
                <img src={alertIcon} alt='alert' />
                <span>Food can be arranged only based on Customer Needs</span>
            </div>
        </div>
        {index % 2 == 0 ? <></> : <div>
            <img src={getImage()} alt={`room_${index}`} className='roomMainImg' />
        </div>}
    </Card>
}

export const RoomsComponent = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='screenTop'>
                <img src={TopImg} alt='Contact-Us' />
                <div>
                    <h2>Rooms</h2>
                </div>
            </div>

            <div className='roomScreenContainer'>
                <h1 className='sectionHeaderText'>Our Luxury Rooms</h1>

                <div className='roomCardList'>
                    {roomsList.map((item, index) => <RoomItem key={item.room} item={item} index={index} />)}
                </div>
            </div>
        </div>
    )
}
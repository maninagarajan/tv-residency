
import React from 'react';
import './roomSuits.css';
import timeImg from '../../../assets/images/time.png'
import { NavLink } from 'react-router-dom';
import { roomsList } from '../../../constants/info';
import { Card } from '@mui/material';
import Room_1 from '../../../assets/images/Rooms/room_1.png'
import Room_2 from '../../../assets/images/Rooms/room_2.png'
import Room_3 from '../../../assets/images/Rooms/room_3.png'
import memberIcon from '../../../assets/images/Rooms/member.png'
import bedIcon from '../../../assets/images/Rooms/bed.png'
import wifiIcon from '../../../assets/images/Rooms/wifi.png'

const RoomItem = ({ item, index }) => {

    const getImage = () => {
        if (index == 0) {
            return Room_1
        } else if (index == 1) {
            return Room_2
        } else {
            return Room_3
        }
    }

    return <Card className='roomCard'>
        <img src={getImage()} alt={`room_${index}`} />
        <div className='bottomRoomCard'>
            <div className='roomTextView'>
                <h3>{item.room}</h3>
            </div>
            <h4>₹{item.price} <span>(Incl. GST)</span></h4>

            <div className='bottomIconView'>
                <img src={memberIcon} alt="member" />
                <span>Upto {item.maxCount} members</span>
            </div>

            <div className='bottomIconView'>
                <img src={bedIcon} alt="bed" />
                <span>{item.extraBedAvailable}</span>
            </div>

            <div className='bottomIconView'>
                <img src={wifiIcon} alt="wifi" />
                <span>{item.wifiConnectivity}</span>
            </div>
        </div>
    </Card>

}

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

            <div className='roomSection'>
                <h1 className='roomSectionHeaderText'>Rooms & Suits</h1>

                <div className='viewSection'>
                    <NavLink to={'/rooms'}>
                        <p>View all</p>
                    </NavLink>
                </div>
            </div>

            <div className='roomCardContainer'>
                {roomsList?.slice(0, 3).map((item, index) => <RoomItem key={item.room} item={item} index={index} />)}
            </div>
        </div>
    )
}
import React from 'react';
import './facilities.css';

const facilitiesList = [
    { label: 'Ultra HD CCTV Surveillance', img: require('../../assets/images/About_Us/Features/cctv.png') },
    { label: '24 Hours Water Supply', img: require('../../assets/images/About_Us/Features/water_supply.png') },
    { label: '24 Hours Genset Backup', img: require('../../assets/images/About_Us/Features/electricity.png') },

    { label: 'Spacious Car Parking', img: require('../../assets/images/About_Us/Features/parking.png') },
    { label: 'Wifi Connectivity', img: require('../../assets/images/About_Us/Features/wifi.png') },
    { label: 'Provide Drinking Water', img: require('../../assets/images/About_Us/Features/drink_water.png') },

    { label: 'Water Heater for All Rooms', img: require('../../assets/images/About_Us/Features/water_heater.png') },
    { label: 'Ramp Facility', img: require('../../assets/images/About_Us/Features/ramp.png') },
    { label: 'Lift Facility', img: require('../../assets/images/About_Us/Features/elevator.png') },

    { label: 'LED TV in All Rooms', img: require('../../assets/images/About_Us/Features/tv.png') },
    { label: '300mts to Temple', img: require('../../assets/images/About_Us/Features/temple.png') },
    { label: 'Food Arrangement based on Customer Needs', img: require('../../assets/images/About_Us/Features/food.png') },
]

const FacilityItem = ({ item }) => {
    return <div className='facilityCard'>
        <img
            src={item.img}
            alt={item.img}
        />
        <span>{item?.label}</span>
    </div>
}

export const FacilitiesServices = () => {
    return (
        <div className='facilitiesContainer'>
            <h1 className='sectionHeaderText'>Facilities & Services</h1>
            <div className='facilityDiv'>
            {facilitiesList.map((item) => <FacilityItem key={item.label} item={item} />)}
            </div>
        </div>
    )
}
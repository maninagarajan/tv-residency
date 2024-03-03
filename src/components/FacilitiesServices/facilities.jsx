import React from 'react';
import './facilities.css';
import cctvImg from '../../assets/images/About_Us/Features/cctv.png';
import waterSupplyImg from '../../assets/images/About_Us/Features/water_supply.png';
import electricityImg from '../../assets/images/About_Us/Features/electricity.png';
import parkingImg from '../../assets/images/About_Us/Features/parking.png';
import wifiImg from '../../assets/images/About_Us/Features/wifi.png';
import drinkWaterImg from '../../assets/images/About_Us/Features/drink_water.png';
import waterHeaterImg from '../../assets/images/About_Us/Features/water_heater.png';
import rampImg from '../../assets/images/About_Us/Features/ramp.png';
import elevatorImg from '../../assets/images/About_Us/Features/elevator.png';
import tvImg from '../../assets/images/About_Us/Features/tv.png';
import templeImg from '../../assets/images/About_Us/Features/temple.png';
import foodImg from '../../assets/images/About_Us/Features/food.png';

const facilitiesList = [
    { label: 'Ultra HD CCTV Surveillance', img: cctvImg },
    { label: '24 Hours Water Supply', img: waterSupplyImg },
    { label: '24 Hours Genset Backup', img: electricityImg },

    { label: 'Spacious Car Parking', img: parkingImg },
    { label: 'Wifi Connectivity', img: wifiImg },
    { label: 'Provide Drinking Water', img: drinkWaterImg },

    { label: 'Water Heater for All Rooms', img: waterHeaterImg },
    { label: 'Ramp Facility', img: rampImg },
    { label: 'Lift Facility', img: elevatorImg },

    { label: 'LED TV in All Rooms', img: tvImg },
    { label: '300mts to Temple', img: templeImg },
    { label: 'Food Arrangement based on Customer Needs', img: foodImg },
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
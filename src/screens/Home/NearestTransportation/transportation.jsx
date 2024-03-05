
import React, { useState } from 'react';
import './transportation.css';
import bus from '../../../assets/images/bus.png'
import aeroplane from '../../../assets/images/aeroplane.png'
import train from '../../../assets/images/railway.png'

const busData = [
    {
        name: 'Karaikal Bus stand',
        distance: '20.3',
        icon: bus
    },
    {
        name: 'Mayiladuthurai Bus stand',
        distance: '22.8',
        icon: bus
    },
    {
        name: 'Chidambaram Bus stand',
        distance: '43.6',
        icon: bus
    }
]

const trainData = [
    {
        name: 'Karaikal Railway Station',
        distance: '22.4',
        icon: train
    },
    {
        name: 'Mayiladuthurai railway station',
        distance: '22.8',
        icon: train
    },
]

const airportData = [
    {
        name: 'Neyveli Airport',
        distance: '85',
        icon: aeroplane
    },
    {
        name: 'Puducherry Airport',
        distance: '114',
        icon: aeroplane
    },
    {
        name: 'Tiruchirappalli International Airport',
        distance: '160',
        icon: aeroplane
    }
]

export const NearestTransporation = () => {
    const [selectedTab, setSelectedTab] = useState('Bus')

    const getTransportList = () => {
        if (selectedTab == 'Bus') {
            return busData
        } else if (selectedTab == 'Train') {
            return trainData
        } else {
            return airportData
        }
    }

    return (
        <div className='transportContainer'>
            <h1 className='sectionHeaderText'>Nearest Transportation</h1>

            <div className='transportTab'>
                <h4
                    onClick={() => setSelectedTab('Bus')}
                    className={selectedTab == 'Bus' ? 'transportText' : ''}>Bus Stand</h4>
                <h4
                    onClick={() => setSelectedTab('Train')}
                    className={selectedTab == 'Train' ? 'transportText' : ''}
                >Railway Junction</h4>
                <h4
                    className={selectedTab == 'Airport' ? 'transportText' : ''}
                    onClick={() => setSelectedTab('Airport')}
                >Airport</h4>
            </div>
            {getTransportList().map((item) => <div key={item.name} className='transportItem'>
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
                <p className='textSeparator'>-</p>
                <p>{item.distance}kms</p>
            </div>)}
        </div>
    )
}
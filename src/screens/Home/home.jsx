import React from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './home.css';

export const HomeComponent = () => {
    return (
        <div className='container'>
            <Navbar />
            <h1>HOME</h1>
        </div>
    )
}
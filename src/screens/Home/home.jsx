import React from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './home.css';
import { ImageCarouselComponent } from './CarouselView/carouselView';
import { FacilitiesServices } from '../../components/FacilitiesServices/facilities';
import { GopuramView } from './GopuramView/gopuram';
import { RoomsSuits } from './RoomSuits/roomSuits';

export const HomeComponent = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='screenContainer'>
                <ImageCarouselComponent />
                <FacilitiesServices />
                <GopuramView />
                <RoomsSuits />
            </div>
        </div>
    )
}
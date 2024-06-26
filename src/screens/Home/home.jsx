import React from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './home.css';
import { ImageCarouselComponent } from './CarouselView/carouselView';
import { FacilitiesServices } from '../../components/FacilitiesServices/facilities';
import { GopuramView } from './GopuramView/gopuram';
import { RoomsSuits } from './RoomSuits/roomSuits';
import { LocationCard } from './Location/location';
import { GalleryView } from './GalleryView/galleryView';
import { NearestTransporation } from './NearestTransportation/transportation';
import { CustomerReviews } from './CustomerReviews/customerReview';
import { BookingSection } from './BookingComponent/bookings';

export const HomeComponent = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='screenContainer'>
                <ImageCarouselComponent />
                <BookingSection />
                <FacilitiesServices />
                <GopuramView />
                <RoomsSuits />
                <LocationCard />
                <GalleryView />
                <NearestTransporation />
                <CustomerReviews />
            </div>
        </div>
    )
}
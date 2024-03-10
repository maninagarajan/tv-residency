import React from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './aboutUs.css';
import TopImg from '../../assets/images/About_Us/AboutUs_Top.png'
import { aboutUs, kasturiBavanamLink } from '../../constants/info';
import { FacilitiesServices } from '../../components/FacilitiesServices/facilities';
import { CustomerReviews } from '../Home/CustomerReviews/customerReview';

export const AboutUsComponent = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='screenTop'>
                <img src={TopImg} alt='About-Us' />
                <div>
                    <h2>About us</h2>
                </div>
            </div>

            <div className='aboutUsContainer'>
                <h1 className='roomSectionHeaderText'>Luxury Made Affordable</h1>
                {aboutUs?.map((line) => <p key={line} className='aboutContent'>{`${line}\n\n`}</p>)}

                <h1 className='roomSectionHeaderText'>Other Properties</h1>
                <span className='propertyText'>Sri Kasthuri Bavanam<a href={kasturiBavanamLink} target='_blank'>Visit</a></span>

                <FacilitiesServices />
                <CustomerReviews title={'Guest Reviews'} />
            </div>
        </div>
    )
}
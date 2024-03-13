import React from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './aboutUs.css';
import TopImg from '../../assets/images/About_Us/AboutUs_Top.png'
import SkBavanam from '../../assets/images/About_Us/skBavanam.png'
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
                <div className='propertiesDiv'>
                    <div>
                        <img src={SkBavanam} alt="sk bavanam" />
                        <a href={kasturiBavanamLink} target='_blank'>Go to Site</a>
                    </div>
                    <div>
                        <span className='propertyText'>No. 6/108, West Car Street,</span>
                        <span className='propertyText'>Near Canara Bank,</span>
                        <span className='propertyText'>Thirukadaiyur - 609311</span>
                    </div>
                </div>


                <FacilitiesServices />
                <CustomerReviews title={'Guest Reviews'} />
            </div>
        </div>
    )
}
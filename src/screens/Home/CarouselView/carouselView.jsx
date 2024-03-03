import React from 'react';
import './carouselView.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide_1 from '../../../assets/images/Home/slide_1.png'
import Slide_2 from '../../../assets/images/Home/slide_2.png'
import Slide_3 from '../../../assets/images/Home/slide_3.png'
import Slide_4 from '../../../assets/images/Home/slide_4.png'

const items = [Slide_1, Slide_2, Slide_3, Slide_4]

const Item = (props) => {
    return (
        <div className='carouselImgContainer'>
            <img src={props.item} alt='slide' className='carouselImg' />
        </div>
    )
}

export const ImageCarouselComponent = () => {
    return (
        <div className='carouselContainer'>
            <Carousel
                animationHandler='slide'
                interval={2500}
                showThumbs={false}
                autoPlay={true}
                showStatus={false}
                showArrows={false}
                infiniteLoop={true}
            >
                {
                    items.map((item) => <Item key={item} item={item} />)
                }
            </Carousel>
            <div className='carouselCover'>
                <h1 className='luxuryText'>Luxury Made Affordable</h1>
                <h3 className='perfectText'>Your Perfect Stay Awaits</h3>
            </div>
        </div>
    )
}
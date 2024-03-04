
import React from 'react';
import './galleryView.css';
import { NavLink } from 'react-router-dom';
import arrowIcon from '../../../assets/images/arrow.png'
import GalleryImg1 from '../../../assets/images/Gallery/1.png'
import GalleryImg2 from '../../../assets/images/Gallery/2.png'
import GalleryImg3 from '../../../assets/images/Gallery/3.png'


export const GalleryView = () => {
    return (
        <div className='galleryContainer'>

            <div className='roomSection'>
                <h1 className='roomSectionHeaderText'>Gallery</h1>

                <div className='viewSection'>
                    <NavLink to={'/rooms'}>
                        <p>View all</p>
                    </NavLink>
                </div>
            </div>

            <div className='galleryImgContainer'>
                <img src={GalleryImg1} alt={'gallery-1'} className='galleryMainImg' />

                <div className='galleryRightContainer'>
                    <img src={GalleryImg2} alt={'gallery-2'} className='galleryTopImg' />
                    <img src={GalleryImg3} alt={'gallery-3'} className='galleryBottomImg' />
                </div>
            </div>


            <div className='bottomViewSection'>
                <NavLink to={'/gallery'} className={'navLink'}>
                    <p>View all</p>
                    <img src={arrowIcon} alt="arrow" />
                </NavLink>
            </div>
        </div>
    )
}
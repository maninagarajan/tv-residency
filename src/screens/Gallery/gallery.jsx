import React, { useState } from 'react';
import Navbar from '../../components/TopNavBar/navBar';
import './gallery.css';
import GalleryImg1 from '../../assets/images/Gallery/1.png'
import GalleryImg2 from '../../assets/images/Gallery/2.png'
import GalleryImg3 from '../../assets/images/Gallery/3.png'
import GalleryImg4 from '../../assets/images/Gallery/4.png'
import GalleryImg5 from '../../assets/images/Gallery/5.png'
import GalleryImg6 from '../../assets/images/Gallery/6.png'
import GalleryImg7 from '../../assets/images/Gallery/7.png'
import GalleryImg8 from '../../assets/images/Gallery/8.png'
import GalleryImg9 from '../../assets/images/Gallery/9.png'
import GalleryImg10 from '../../assets/images/Gallery/10.png'
import GalleryImg11 from '../../assets/images/Gallery/11.png'
import GalleryImg12 from '../../assets/images/Gallery/12.png'
import Gallery_Top from '../../assets/images/Gallery/Gallery_Top.png';
import { ImagesModal } from './imageModal';

let galleryList = [GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5, GalleryImg6,
    GalleryImg7, GalleryImg8, GalleryImg9, GalleryImg10, GalleryImg11, GalleryImg12]

export const GalleryComponent = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    const [imageIndex, setImageIndex] = useState(null)

    return (
        <div className='container'>
            <Navbar />
            <div className='screenTop'>
                <img src={Gallery_Top} alt='gallery' />
                <div>
                    <h2>Gallery</h2>
                </div>
            </div>

            <div className='galleryContainer'>
                {galleryList.map((imgPath, index) => <img
                    src={imgPath}
                    key={imgPath}
                    className='roomImg'
                    alt={`gallery-${index + 1}`}
                    onClick={() => {
                        setModalVisible(true)
                        setModalContent(galleryList)
                        setImageIndex(index)
                    }} />)}
            </div>
            <ImagesModal
                modalVisible={modalVisible}
                handleClose={() => {
                    setModalVisible(false)
                    setModalContent(null)
                    setImageIndex(null)
                }}
                modalContent={modalContent}
                imageIndex={imageIndex}
            />
        </div>
    )
}
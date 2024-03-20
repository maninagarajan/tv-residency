import { Modal } from '@mui/material';
import React from 'react';
import './imageModal.css';
import closeIcon from '../../assets/images/close.png'
import { Carousel } from 'react-responsive-carousel';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

export const ImagesModal = ({ modalVisible, handleClose, modalContent, imageIndex = 0 }) => {

    const ImageItem = (props) => {
        return (
            <div className='carouselImgDiv'>
                <img src={props.item} alt='slide' className='carouselImage' />
            </div>
        )
    }

    return <Modal
        open={modalVisible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        {modalContent ? <div className='modalImgContainer'>
            <img src={closeIcon} alt="close" className='closeIcon' onClick={handleClose} />
            <div className='carouselParent'>
                <Carousel
                    animationHandler='slide'
                    showThumbs={false}
                    showStatus={false}
                    showArrows={true}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    selectedItem={imageIndex}
                    renderArrowPrev={(clickHandler, hasPrev) =>
                        hasPrev && (
                            <button onClick={clickHandler} className='left-button'>
                                <ArrowBackIosNew className='arrowIcon' />
                            </button>
                        )
                    }
                    renderArrowNext={(clickHandler, hasNext) =>
                        hasNext && (
                            <button onClick={clickHandler} className='right-button'>
                                <ArrowForwardIos className='arrowIcon' />
                            </button>
                        )
                    }
                >
                    {
                        modalContent.map((item) => <ImageItem key={item} item={item} />)
                    }
                </Carousel>
            </div>
        </div> : <></>}
    </Modal>
}
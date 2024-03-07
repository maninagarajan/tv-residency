import { Modal } from '@mui/material';
import React from 'react';
import './DetailsModal.css';
import closeIcon from '../../assets/images/close.png'

export const ModalComponent = ({ modalVisible, handleClose, modalContent }) => {
    return <Modal
        open={modalVisible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        {modalContent ? <div className='modalContainer'>
            <img src={closeIcon} alt="close" className='closeIcon' onClick={handleClose} />
            <div className='modalRowContainer'>
                <div className='modalLeftContainer'>
                    <h4>{modalContent.name}{modalContent.subName ? ` - ${modalContent.subName}` : ''}</h4>
                    <p>{modalContent.description}</p>
                    <div className='modalTimingContainer'>
                        {modalContent.morningTime ? <span>Open time: {modalContent.eveningTime ? ' Morning - ' : ''}{modalContent.morningTime}</span> : <></>}
                        {modalContent.eveningTime ? <span>Evening - {modalContent.eveningTime}</span> : <></>}
                    </div>
                </div>
                <img src={modalContent.img} alt={modalContent.subName} className='modalMainImg' />
            </div>
        </div> : <></>}
    </Modal>
}
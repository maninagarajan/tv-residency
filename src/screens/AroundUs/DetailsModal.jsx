import { Modal } from '@mui/material';
import React from 'react';

export const ModalComponent = ({ modalVisible, handleClose, modalContent }) => {
    return <Modal
        open={modalVisible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        {modalContent ? <div>
            <p>{modalContent.name}</p>
        </div> : <></>}
    </Modal>
}
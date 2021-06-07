import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import ProductImage from './ProductImage';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '10000'
    }
};


Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, close }) => {

return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Image Modal"
            className="modal-dialog modal-dialog-centered"
            id="login-modal" >
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
                        <span aria-hidden="true"><i className="icon-close"></i></span>
                        <ProductImage image={image}/>
                    </button>
                   
                </div>
            </div>
        </Modal>
    )
}


export default ImageModal;
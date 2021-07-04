import React from 'react';
import {Modal,Button} from 'react-bootstrap'
import AddContact from './AddContact'

const AddContactModal = (props) => {
    const{title,show,handleClose,handleSubmit}=props
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddContact handleClose={handleClose} handleSubmit={handleSubmit}/>
            </Modal.Body>
        </Modal>
    );
};

export default AddContactModal;
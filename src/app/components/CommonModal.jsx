import React from 'react'
import { Button, Modal } from 'react-bootstrap';

const CommonModal = (props) => {
    const { body, show, handleClose, title } = props;
    return (
        <Modal
            show={show}
            onHide={handleClose}
            keyboard={false}
            backdrop='static'
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CommonModal
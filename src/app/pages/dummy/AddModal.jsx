import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const AddModal = (props) => {
    const { show, handleClose, saveData } = props;
    const [data, setData] = useState("");
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Addd Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input type="text" onChange={(e) => setData(e.target.value)} value={data} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => saveData(data)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddModal

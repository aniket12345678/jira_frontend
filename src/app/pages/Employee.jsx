import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import CommonModal from '../components/CommonModal';
import { generateRandomCode } from '../utils/helpers';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

const Employee = () => {
    const [addModal, setAddModal] = useState();
    const [code, setCode] = useState('');
    const addEmployee = (params) => {
        setAddModal(params);
    }
    const handleClose = () => {
        setAddModal(false);
    }
    const generateCode = () => {
        setCode(generateRandomCode(4));
    }
    return (
        <div>
            <Button onClick={addEmployee}>Add</Button>
            <DataTable
                columns={columns}
                data={data}
            />
            <CommonModal
                title={'Add Employee'}
                show={addModal}
                body={
                    <React.Fragment>
                        <Row>
                            <Col md={6}>
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={6}>
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="Last name"
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Button onClick={generateCode}>Generate code</Button>
                                        {code && <div>{code}</div>}
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col md={6}>
                                <Form>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlInput1"
                                    >
                                        <Form.Control
                                            type="file"
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </React.Fragment>
                }
                handleClose={handleClose}
            />
        </div>
    )
}

export default Employee
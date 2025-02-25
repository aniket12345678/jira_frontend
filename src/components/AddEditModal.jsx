import { useFormik } from 'formik';
import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { initialObj } from '../formvalidation/initialValues';
import { validationObj } from '../formvalidation/yupValidation';
import { AddJob } from '../slices/job.slice';
import { FormComponent } from './FormComponent';
import { useDispatch } from 'react-redux';

const AddEditModal = (props) => {
    const { show, handleClose, fetchJobs } = props;
    const dispatch = useDispatch();

    const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialObj.jobPostAdd,
        validationSchema: validationObj.jobPostAdd,
        onSubmit: async (values) => {
            await dispatch(AddJob(values)).unwrap();
            fetchJobs();
            resetForm();
            handleClose();
        }
    })

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Job</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <FormComponent
                        type="text"
                        placeholder='Title'
                        name='title'
                        values={values}
                        handleChange={handleChange}
                        errors={errors}
                    />
                    <FormComponent
                        type="text"
                        placeholder='Description'
                        name='description'
                        values={values}
                        handleChange={handleChange}
                        errors={errors}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type='submit'>Save</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddEditModal

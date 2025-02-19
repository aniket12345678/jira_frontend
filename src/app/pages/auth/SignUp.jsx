import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { Col, Form, Row } from 'react-bootstrap'

import AuthLayout from '../../components/AuthLayout'

const SignUp = () => {
    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirm_password: ''
    }
    const validateFeilds = Yup.object().shape({
        firstname: Yup.string().required('Enter firstname'),
        lastname: Yup.string().required('Enter lastname'),
        email: Yup.string().required('Enter email'),
        password: Yup.string()
            .min(8, "Minimum 8 characters are required")
            .max(20, "Maximum 20 characters are allowed")
            .required('Enter password'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Enter Confirm password')
    })

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: validateFeilds,
        onSubmit: (values) => {
            console.log('values:- ', values);
        }
    });

    return (
        <div className="card-body p-5 text-center">
            <div className="mb-md-2 mt-md-4 pb-5">
                <h2 className="fw-bold mb-3 text-uppercase">Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    name='firstname'
                                    value={values.firstname}
                                />
                                {
                                    errors.firstname && <div>{errors.firstname}</div>
                                }
                            </div>
                        </Col>
                        <Col md={6}>
                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    name='lastname'
                                    value={values.lastname}
                                />
                                {
                                    errors.lastname && <div>{errors.lastname}</div>
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    name='email'
                                    value={values.email}
                                />
                                {
                                    errors.email && <div>{errors.email}</div>
                                }
                            </div>
                        </Col>
                        <Col md={6}>
                            <div data-mdb-input-init className="form-outline form-white mb-4">
                                <input
                                    type="password"
                                    placeholder='Password'
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    name='password'
                                    value={values.password}
                                />
                                {
                                    errors.password && <div>{errors.password}</div>
                                }
                            </div>
                        </Col>
                    </Row>
                    <div data-mdb-input-init className="form-outline form-white mb-4">
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            className="form-control form-control-lg"
                            onChange={handleChange}
                            name='confirm_password'
                            value={values.confirm_password}
                        />
                        {
                            errors.confirm_password && <div>{errors.confirm_password}</div>
                        }
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
                </Form>
            </div>
            <div>
                <p className="mb-0">Already have an account? &nbsp;
                    <Link to={'/'}>SignIn</Link>
                </p>
            </div>
        </div>
    )
}

export default AuthLayout(SignUp)

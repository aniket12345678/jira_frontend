import React from 'react'
import './auth.css'
import { Link } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Form } from 'react-bootstrap'

const SignIn = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    const validateFeilds = Yup.object().shape({
        email: Yup.string().required('Enter email'),
        password: Yup.string().required('Enter password'),
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
                <h2 className="fw-bold mb-3 text-uppercase">Login</h2>
                <Form onSubmit={handleSubmit}>
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
                            errors.email && <div>Enter email</div>
                        }
                    </div>
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
                            errors.password && <div>Enter Password</div>
                        }
                    </div>
                    <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                </Form>
            </div>
            <div>
                <p className="mb-0">Don't have an account? &nbsp;
                    <Link to={'/signup'}>SignUp</Link>
                </p>
            </div>
        </div>
    )
}

export default AuthLayout(SignIn)

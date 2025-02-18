import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const AuthLayout = (Component) => {
    return function WrappedComponent(props) {
        const [authUser] = useState(true);
        if (authUser) {
            return <Navigate to={'/dashboard'}/>
        }
        return (
            <div>
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                    <Component {...props} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
}

export default AuthLayout

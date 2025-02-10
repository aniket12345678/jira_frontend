import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Dummy from '../pages/dummy/Dummy'
import Employee from '../pages/Employee'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import Layout from '../components/Layout'
import ProtectedRoutes from '../components/ProtectedRoutes'

import '../media/style/style.css';
import '../media/style/css/bootstrap.min.css'

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/dummy' element={<Dummy />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path='/dashboard' element={<Layout Page={Home} />} />
                        <Route path='/employee' element={<Layout Page={Employee} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing
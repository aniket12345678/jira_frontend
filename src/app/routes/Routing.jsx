import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import Layout from '../components/Layout'

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/signup' Component={<SignUp />} />
                    <Route path='/home' element={<Layout Page={Home} />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Routing

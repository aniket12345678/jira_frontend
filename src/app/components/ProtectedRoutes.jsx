import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const [authUser] = useState(true);
    return (
        <div>
            {authUser ? <Outlet /> : <Navigate to={'/'} />}
        </div>
    )
}

export default ProtectedRoutes

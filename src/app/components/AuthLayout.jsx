import React from 'react'

const AuthLayout = (Component) => {
    return () => (
        <div>
            <Component />
        </div>
    )
}

export default AuthLayout

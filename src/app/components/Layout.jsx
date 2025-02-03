import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ Page }) => {
    return (
        <div>
            <Header />
            <Page />
            <Footer />
        </div>
    )
}

export default Layout

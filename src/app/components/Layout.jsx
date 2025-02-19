import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Layout = ({ Page }) => {
    return (
        <div>
            <Header />
            <Sidebar />
            <main id='main' className='main'>
                <Page />
            </main>
            <Footer />
        </div>
    )
}

export default Layout

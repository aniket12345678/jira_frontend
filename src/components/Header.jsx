import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout, resetData } from '../redux/reducers';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout());
        dispatch(resetData());
        navigate('/');
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Job Portal</Navbar.Brand>
                <Button onClick={handleLogout}>Logout</Button>
            </Container>
        </Navbar>
    )
}

export default Header

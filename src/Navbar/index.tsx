import './style.css';
import { ReactComponent as Logo } from './logo.svg'
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar(){
    return (
        <nav className="main-navbar">
            <Logo/>
            <Link to="/" className="logo-text">ER Delivery</Link>
        </nav>
    )
}

export default Navbar;
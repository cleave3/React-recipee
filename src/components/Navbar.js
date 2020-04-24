import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top shadow">
            <Link id="site-icon" to="/" className="navbar-brand center">
                <img src={Logo} alt="logo" />
            </Link>
        </nav>
    );
};

export default Navbar;

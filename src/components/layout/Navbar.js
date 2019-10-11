import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper white">
                    <Link to="/" className="brand-logo center">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

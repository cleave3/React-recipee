import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="recipie-nav container-fluid d-flex flex-wrap justify-content-between p-3 shadow">
            <Link id="site-icon" to="/" className="font-weight-bold site-title center text-white">
                <i className="fa fa-cutlery text-danger"></i>&nbsp;KORET RECIPEES
            </Link>
            <div>
                <NavLink to="/search" className="navlinks m-2 center text-white">
                    Discover
                </NavLink>
                <NavLink to="/trends" className="navlinks m-2 center text-white">
                    Trends
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <div className="bottom-nav w-100 bg-dark">
            <div className="d-flex justify-content-center">
                <Link to="/">
                    <i className="mx-2 fa fa-home text-white"></i>
                </Link>
                <Link to="/search">
                    <i className="mx-2 fa fa-search text-white"></i>
                </Link>
            </div>
        </div>
    );
};

export default BottomNavbar;

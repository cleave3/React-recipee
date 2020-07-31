import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <div className="bottom-nav w-100 px-2 py-1">
            <div className="d-flex justify-content-between">
                <Link to="/">
                    <i className="mx-2 fa fa-home text-white"></i>
                </Link>
                <Link to="/search">
                    <i className="mx-2 fa fa-search text-white"></i>
                </Link>
                <Link to="/trends">
                    <i className="mx-2 fa fa-line-chart text-white"></i>
                </Link>
            </div>
        </div>
    );
};

export default BottomNavbar;

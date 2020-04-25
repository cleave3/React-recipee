import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <div className="bottom-nav w-100 px-2 py-1">
            <div className="d-flex justify-content-between">
                <Link to="/search">
                    <i className="mx-2 fa-2x fa fa-search text-dark"></i>
                </Link>
                <Link to="/">
                    <i className="mx-2 fa-2x fa fa-home text-dark"></i>
                </Link>
                <Link to="/trends">
                    <i className="mx-2 fa-2x fa fa-line-chart text-dark"></i>
                </Link>
            </div>
        </div>
    );
};

export default BottomNavbar;

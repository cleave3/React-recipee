import React from 'react';
import loader from '../assets/img/beaneater.svg';

const Spinner = () => {
    return (
        <div className="d-flex m-5 justify-content-center">
            <img src={loader} />
            {/* <div className="activity-indicator">
                <div></div>
                <div></div>
                <div></div>
            </div> */}
        </div>
    );
};

export default Spinner;

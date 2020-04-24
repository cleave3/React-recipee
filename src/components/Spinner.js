import React from 'react';

const Spinner = () => {
    return (
        <div className="d-flex m-5 justify-content-center">
            <div className="activity-indicator">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;

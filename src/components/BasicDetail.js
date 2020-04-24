import React from 'react';

const BasicDetail = ({ detail }) => {
    return (
        <div className="card shadow my-2">
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <h6 className="card-title text-dark text-center my-2">BASIC DETAIL</h6>
                    <li className="list-group-item py-1 text-dark d-flex justify-content-between" style={{ fontSize: '14px' }}>
                        <div>LICENSE</div>
                        <div>{detail.data.license}</div>
                    </li>
                    <li className="list-group-item py-1 text-dark d-flex justify-content-between" style={{ fontSize: '14px' }}>
                        <div>GLUTEN FREE</div>
                        {detail.data.glutenFree ? (
                            <div>
                                <b>YES</b>
                            </div>
                        ) : (
                            <div>
                                <b>NO</b>
                            </div>
                        )}
                    </li>
                    <li className="list-group-item py-1 text-dark d-flex justify-content-between" style={{ fontSize: '14px' }}>
                        <div>KETOGENIC</div>
                        {detail.data.ketogenic ? (
                            <div>
                                <b>YES</b>
                            </div>
                        ) : (
                            <div>
                                <b>NO</b>
                            </div>
                        )}
                    </li>
                    <li className="list-group-item py-1 text-dark d-flex justify-content-between" style={{ fontSize: '14px' }}>
                        <div>VEGETARIAN</div>
                        {detail.data.vegetarian ? (
                            <div>
                                <b>YES</b>
                            </div>
                        ) : (
                            <div>
                                <b>NO</b>
                            </div>
                        )}
                    </li>
                    <li className="list-group-item py-1 text-dark d-flex justify-content-between" style={{ fontSize: '14px' }}>
                        <div>VERY HEALTHY</div>
                        {detail.data.veryHealthy ? (
                            <div>
                                <b>YES</b>
                            </div>
                        ) : (
                            <div>
                                <b>NO</b>
                            </div>
                        )}
                    </li>
                    <li className="list-group-item py-1 text-dark d-flex justify-content-between" style={{ fontSize: '14px' }}>
                        <div>VERY POPULAR</div>
                        {detail.data.veryPopular ? (
                            <div>
                                <b>YES</b>
                            </div>
                        ) : (
                            <div>
                                <b>NO</b>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BasicDetail;

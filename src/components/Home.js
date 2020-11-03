import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <div id="home-wrapper">
            <div className="d-flex justify-content-center align-items-center" style={{"height": "calc(100vh - 400px)"}}>
                <div className="container-fluid text-white">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="text-center site-title">
                                <p className="display-4">
                                    <i className="fa fa-cutlery text-danger"></i>&nbsp;KORET RECIPEES
                                </p>
                                <i>The Foodie's Paradise</i>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-center m-3">Unlimited Access to International Food recipies</h3>
                            <div className="d-flex justify-content-center m-lg-5">
                                <Link to="/search" className="btn btn-outline-danger  text-white w-100 m-1">
                                    Enter&nbsp;<i className="fa fa-chevron-circle-right"></i>
                                </Link>

                                <Link to="/trends" className="btn btn-outline-warning  text-white w-100 m-1">
                                    Trends&nbsp;<i className="fa fa-line-chart"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
};

export default Home;

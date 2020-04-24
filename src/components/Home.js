import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="home-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div id="site-title" className="text-center">
                            <p className="display-4">
                                <i className="fa fa-cutlery text-danger"></i>&nbsp;KORET RECIPEES
                            </p>
                            <i>The Foodie's Paradise</i>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center m-3">Unlimited Access to International Food recipies</h3>
                        <div className="d-flex justify-content-center m-5">
                            <Link to="/search" className="btn btn-outline-danger w-100">
                                Enter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

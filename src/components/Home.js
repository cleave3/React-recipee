import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center mt-5">
          <div className="text-center">
            <p className="display-4">
              <i className="fa fa-cutlery"></i>&nbsp;KORET RECIPEES
            </p>
            <i>The Foodie's Paradise</i>
          </div>
        </div>
        <div className="col-md-6">
          <i>
            <h3 className="text-center m-3">Unlimited Access to International Food recipies</h3>
          </i>

          <div className="d-flex justify-content-center m-5">
            <Link to="/search" className="btn btn-outline-danger w-100">
              Enter
            </Link>
          </div>
          <div className="text-center">
            <h4>Features</h4>
            <p>Easy Navigation</p>
            <p>Easy Search Functionality</p>
            <p>Get Nutrients Information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = props => {
    return (
        <div style={{ marginTop: '50px' }}>
            <div className="row">
                <div className="col s3 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/sample-1.jpg" />
                            <span className="card-title">Card Title</span>
                        </div>
                        <div className="card-content">
                            <p>
                                I am a very simple card. I am good at containing
                                small bits of information. I am convenient
                                because I require little markup to use
                                effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;

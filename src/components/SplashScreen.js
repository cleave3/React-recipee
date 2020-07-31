import React from 'react';
import Logo from '../assets/img/logo.png';

const SplashScreen = () => {
    setTimeout(() => {
        document.querySelector('.splash').style.display = 'none';
    }, 2000);

    return (
        <div className="splash">
            <img src={Logo} alt="logo" />
        </div>
    );
};

export default SplashScreen;

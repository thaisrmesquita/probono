import React from 'react';
import LogoImg from '../../Assets/images/logo.png';

import './logo.css';

function Logo () {
    return (
        <div className="img-logo-container">
            <img src={LogoImg} />
        </div>
    )
}

export default Logo;
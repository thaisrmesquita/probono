import React from 'react';
import Logo from '../../Assets/images/logo.png';
import { FiLogOut } from 'react-icons/fi';

import './topbar.css';

function Topbar () {
    return(
        <div className="topbar">
            <div className="topbar-container">
                <div className="topbar-logo">
                    <img className="logo" src={Logo}/>
                </div>
                <div className="topbar-icon-logout">
                    <FiLogOut size={24} color="#fff" />
                </div>
            </div>
        </div>
    )
}
export default Topbar;
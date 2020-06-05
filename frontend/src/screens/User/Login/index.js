import React from 'react';
import './userlogin.css';

import Logo from '../../../components/UI/Logo';
import UserFormLogin from '../../../components/User/Form/Login';

function UserLogin () {
    return (
        <div className="login-container">
            <div>
                <div className="container-info-form">
                    <Logo />
                    <UserFormLogin />
                </div>
            </div>
        </div>
    )
}
export default UserLogin;
import React from 'react';
import Topbar from '../../components/UI/Topbar';
import FormRegisterLawyer from '../../components/FormRegisterLaywer';

import './style.css';

function Register () {
    return(
        <div>
            <Topbar/>
            <div className="container-register-form">
                <div className="content-register-container">
                    <FormRegisterLawyer />
                </div>
            </div>
        </div>
    );
}
export default Register;
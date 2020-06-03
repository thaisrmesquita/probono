import React from 'react';
import Header from '../../components/Header';
import FormRegisterLawyer from '../../components/FormRegisterLaywer';

import './style.css';

function Register () {
    return(
        <div>
            <Header/>
            <div className="container-register-form">
                <div className="content-register-container">
                    <FormRegisterLawyer />
                </div>
            </div>
        </div>
    );
}
export default Register;
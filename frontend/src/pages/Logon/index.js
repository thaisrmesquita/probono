import React from 'react';
import Header from '../../components/Header';
import FormLogonLawyer from '../../components/FormLogonLaywer';

import './style.css';

function Logon () {
    return(
        <div>
            <Header/>
            <div className="container-form">
                <div className="content-container">
                    <FormLogonLawyer />
                </div>
            </div>
        </div>
    );
}
export default Logon;
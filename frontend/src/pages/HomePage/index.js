import React from 'react';
import Header from '../../components/Header';

import './style.css';

function Logon () {
    return(
        <div>
            <Header/>
            <div className="option-container">
                <div className="options">
                    <div className="item">
                        <a href="/login">Advogado</a>
                    </div>
                    <div className="item">
                        <a href="/login">Cliente</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Logon;
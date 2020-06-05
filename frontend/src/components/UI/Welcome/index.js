import React from 'react';
import './welcome.css';

function Welcome () {
    const lawyerName = localStorage.getItem('lawyerName');
    
    return (
            <div className="welcome-container">
                <h2 className="welcome-title">Bem-vindo {lawyerName}</h2>
            </div>
    )
}

export default Welcome;
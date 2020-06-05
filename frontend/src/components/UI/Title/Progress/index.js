import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import './titleprocess.css';

function TitleProgress () {
    return (
        <div>
            <div className="container-title-progress">
                <div className="title-progress">
                    <h2 className="title">Andamentos:</h2>
                </div>
                <div className="icon-progress">
                    <div className="container-icon">
                        <Link to="progress/register"><FiPlus size={30} color="#D41215"/></Link>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default TitleProgress;
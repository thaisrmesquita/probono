import React from 'react';
import { FiPlus } from 'react-icons/fi';
import './titleprocess.css';

function TitleProcess () {
    return (
        <div>
            <div className="container-title-process">
                <div className="title-process">
                    <h2 className="title">Processos</h2>
                </div>
                <div className="icon-process">
                    <div className="container-icon">
                        <FiPlus size={32} color="#D41215"/>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default TitleProcess;
import React from 'react';
import { FiPlus, FiEdit2,FiTrash2 } from 'react-icons/fi';
import './titleprocess.css';

function TitleProcessOne (props) {
    return (
        <div>
            <div className="container-title-process-one">
                <div className="title-process-one">
                    <h2 className="title">Processo nº {props.location.state.number}</h2>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default TitleProcessOne;
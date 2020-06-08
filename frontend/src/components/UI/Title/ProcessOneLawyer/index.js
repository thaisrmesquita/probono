import React from 'react';
import {useHistory} from 'react-router-dom';
import { FiPlus, FiEdit2,FiTrash2 } from 'react-icons/fi';
import './titleprocess.css';

import api from '../../../../services/api';
function TitleProcessOne (props) {
    const history = useHistory();
    const processId = props.id;

    async function handleDeleteProcess() {
        try {
            await api.delete(`process/${processId}`);
            alert('Processo removido.');
            history.push('/dashboard');
        } catch (err) {
            alert('Erro ao deletar processo, tente novamente!');
        }

    }
    return (
        <div>
            <div className="container-title-process-one">
                <div className="title-process-one">
                    <h2 className="title">Processo nº {props.location.state.number}</h2>
                </div>
                <div className="title-process-one">
                    <FiTrash2 className="icons" size={20} color="618AC8" onClick={() => handleDeleteProcess(process.id)}/>
                    <FiEdit2 className="icons" size={20} color="618AC8"/>
                </div>
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default TitleProcessOne;
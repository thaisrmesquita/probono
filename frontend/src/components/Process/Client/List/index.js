import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './list.css';

import api from '../../../../services/api';

function ProcessList (props) {
        const processes = props.processes;
        const history = useHistory();

        function handleProcess(e, process) {
            console.table(process);
            e.preventDefault();

            history.push({
                pathname: '/client/process', 
                state: process
            })
        }
    
    return (
        <div className='ctn-process-card' >
            {processes !== undefined && processes.map(process=>(
            <div className="form-container-process" onClick={e => handleProcess(e, process)}>
                 <div className="container-process">
                     <h3>Nº: {process.number}</h3>
                     <h3>Cliente: Thaís Ribeiro de Mesquita</h3>
                     <h3>CPF: {process.client}</h3>
                 </div>
             </div>   
            ))}         
        </div>
    );
}
export default ProcessList;
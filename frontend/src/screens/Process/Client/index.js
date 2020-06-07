import React, {useState, useEffect} from 'react';
import './clientprocess.css';

import ProcessList from '../../../components/Process/Client/List';

import api from '../../../services/api';

function ProcessClient (props) {

    const clientCpf = localStorage.getItem('clientCPF');

    let numberProcess = null;
    if (props.location.state) {
        numberProcess = props.location.state.number;
    }
    const [processes, setProcesses] = useState([]);

    useEffect(() => {
        api.get('process-lawyer', {
            params: {
                responsible: lawyerEmail,
            }
        }).then(response => {
            setProcesses(response.data);
        })
    }, [numberProcess]);

    return (
        <div>
            <ProcessList {...props}/>
        </div>
    )
}
export default ProcessClient;
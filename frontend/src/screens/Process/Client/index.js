import React, {useState, useEffect} from 'react';
import './clientprocess.css';

import ProcessList from '../../../components/Process/Client/List';

import api from '../../../services/api';

function ProcessClient (props) {

    const clientCpf = localStorage.getItem('clientCpf');

    let numberProcess = null;
    if (props.location.state) {
        numberProcess = props.location.state.number;
    }
    const [processes, setProcesses] = useState([]);

    useEffect(() => {
        api.get('process-client', {
            params: {
                client: clientCpf,
            }
        }).then(response => {
            setProcesses(response.data);
        })
    }, [numberProcess]);

    return (
        <div>
            <h1>aaaamor</h1>
            <ProcessList processes={processes}/>
        </div>
    )
}
export default ProcessClient;
import React, {useState, useEffect} from 'react';
import './clientprocess.css';
import Topbar from '../../../components/UI/Topbar';
import TitleProcessClient from '../../../components/UI/Title/ProcessClient';
import ProcessList from '../../../components/Process/Client/List';
import SearchProcess from '../../../components/Process/Search';
import Welcome from '../../../components/UI/Welcome';
import api from '../../../services/api';

import './clientprocess.css';

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
            <Topbar />
            <div class="container-dashboard-client">
                <Welcome />
                <TitleProcessClient />
                <SearchProcess />  
                <ProcessList processes={processes}/>
            </div>
        </div>
    )
}
export default ProcessClient;
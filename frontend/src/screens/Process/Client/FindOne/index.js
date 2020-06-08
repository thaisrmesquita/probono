import React, {useState, useEffect} from 'react';
import Topbar from '../../../../components/UI/Topbar';
import Welcome from '../../../../components/UI/Welcome';
import TitleProcessOne from '../../../../components/UI/Title/ProcessOne';
import DataClient from '../../../../components/Process/DataClient';
import TitleProgressClient from '../../../../components/UI/Title/ProgressClient';
import ProgressList from '../../../../components/Progress/Client/List';
import DataInfoClient from '../../../../components/Process/DataInfoClient';
import './findone.css';

import api from '../../../../services/api';

function ProcessClientFindOne (props) {
    console.log("Tela do Cliente");
    const number = props.location.state.number;
    const lenProgress = props.location.state.lenProgress;
    const [process, setProcess] = useState(null);

    useEffect(()=>{
        api.get(`process/${number}`, {
        }).then(response => {
            setProcess(response.data);
        })
    },[lenProgress]);

    return (
        <div>
            <Topbar />
            {process !== null &&
                <div className="container-process">
                    <Welcome />
                    <TitleProcessOne {...props}/>
                    <DataInfoClient client={process.client}/>
                    <TitleProgressClient number={number} {...props} />
                    <ProgressList progress={process.progress} />
                </div>
            }
        </div>
    )
}

export default ProcessClientFindOne;
import React, {useState, useEffect} from 'react';
import Topbar from '../../../components/UI/Topbar';
import Welcome from '../../../components/UI/Welcome';
import TitleProcessOne from '../../../components/UI/Title/ProcessOne';
import DataClient from '../../../components/Process/DataClient';
import TitleProgress from '../../../components/UI/Title/Progress';
import ProgressList from '../../../components/Progress/List';
import './findone.css';

import api from '../../../services/api';

function ProcessFindOne (props) {
    console.log("Props: ", props);

    const number = props.location.state.number;
    const [process, setProcess] = useState(null)

    useEffect(()=>{
        api.get(`process/${number}`, {
        }).then(response => {
            setProcess(response.data);
        })
    },[number]);

    console.log(process);

    return (
        <div>
            <Topbar />
            {process !== null &&
                <div className="container-process">
                    <Welcome />
                    <TitleProcessOne {...props}/>
                    <DataClient {...props} />
                    <TitleProgress {...props} />
                    <ProgressList progress={process.progress} />
                </div>
            }
        </div>
    )
}

export default ProcessFindOne;
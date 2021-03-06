import React, { useState, useEffect} from 'react';
import Topbar from '../../components/UI/Topbar';
import Welcome from '../../components/UI/Welcome';
import TiTleProcess from '../../components/UI/Title/Process';
import RuleRegister from '../../components/UI/Title/RuleRegister';
import ProcessList from '../../components/Process/List';
import ProcessSearch from '../../components/Process/Search';
import MenuDropDown from '../../components/Translation/MenuDropdown';
import './style.css';

import api from '../../services/api';

function DashboardLawyer(props) {
    const lawyerName = localStorage.getItem('lawyerName');
    const lawyerEmail = localStorage.getItem('lawyerEmail');
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
            console.log(response);
            setProcesses(response.data);
        })
    }, [numberProcess]);

    return (
        <div>
            <Topbar />
            <div className="container-dashboard">
                <Welcome />
                <MenuDropDown />
                <TiTleProcess />
                <ProcessSearch />
                <ProcessList processes={processes}/>
                {/*<RuleRegister />*/}
            </div>
        </div>
    );
}

export default DashboardLawyer;
import React from 'react';
import Topbar from '../../components/UI/Topbar';
import Welcome from '../../components/UI/Welcome';
import TiTleProcess from '../../components/UI/Title/Process';
import ProcessList from '../../components/Process/List';
import './style.css';

function DashboardLawyer () {
    const lawyerName = localStorage.getItem('lawyerName');
    return (
        <div>
            <Topbar />
                <div className="container-dashboard">
                    <Welcome />
                    <TiTleProcess />
                    <ProcessList />
                </div>
        </div>
    );
}

export default DashboardLawyer;
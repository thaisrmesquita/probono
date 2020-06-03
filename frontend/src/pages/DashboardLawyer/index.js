import React from 'react';
import { FiPower, FiPlusCircle } from 'react-icons/fi';
import Header from '../../components/Header';
import ProcessCard from '../../components/ProcessCard';
import './style.css';

function DashboardLawyer () {
    return (
        <div>
            <Header />
            <div className="dashboard-container">
                <div className="container-welcome">
                    <div className="topbar">
                        <h2> Seja bem-vindo(a) Fulano</h2>
                        <a><FiPower size={22} color="#E02041"/></a>
                    </div>
                    <div className="container-btn">
                    </div>
                </div>
                <div className="btn-add-process">
                    <div className="container-title">
                        <h2 className="title">Processos</h2>
                    </div>
                    <div className="container-btn">
                        <a>Novo Processo</a>
                    </div>
                    
                </div>

                <ProcessCard />
            </div>
        </div>
    );
}

export default DashboardLawyer;
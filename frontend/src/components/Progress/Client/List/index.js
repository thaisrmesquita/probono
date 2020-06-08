import React from 'react';
import './list.css';

function ClientProgressList({ progress }) {

    return (
        <div className='ctn-progress-card'>
            {progress.map(p => (
                <div className="form-container-progress">
                    <div className="container-progress">
                        <h3>Descrição: {p.description}</h3>
                        <h3>Tradução: {p.translation ? p.translation : "Sem tradução disponível"}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ClientProgressList;
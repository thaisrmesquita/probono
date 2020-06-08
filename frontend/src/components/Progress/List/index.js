import React from 'react';
import moment from 'moment';
import './list.css';

function ProgressList({ progress }) {
    console.log('aqui',progress);
    console.log(progress.description);

    return (
        <div className='ctn-progress-card'>
            {progress.map(p => (
                <div className="form-container-progress">
                    <div className="container-progress">
                        <h3>Descrição: {p.description}</h3>
                        <h3>Data: {moment(`${p.published}`).format("DD/MM/YYYY")}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProgressList;
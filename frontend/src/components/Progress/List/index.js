import React from 'react';
import './list.css';

function ProgressList ({progress}) {   
    console.log(progress); 

    return (
        <div className='ctn-progress-card'>
            <div className="form-container-progress">
                        {progress.map(p => (
                            <div className="container-progress">
                                <h3>Descrição: { p.description }</h3>
                                <h3>Data: { p.published }</h3>
                            </div>
                        ))}
            </div>
        </div>
    );
}
export default ProgressList;
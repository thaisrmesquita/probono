import React from 'react';

import './dataclient.css';

function DataClient (props) {
    console.log("Props: ", props.client);
    return (
        <div>
            <div className="container-data-client">
                <span className="title">Cliente:</span><span> {props.client.name}</span><br/>
                <span className="title">CPF:</span><span> {props.client.cpf} </span><br/>
            </div>
        </div>
    )
}
export default DataClient;
import React from 'react';

import './dataclient.css';

function DataClient (props) {
    console.log("Props Cliente: ", props.client);

    let client = {};

    if (props.client.cpf === undefined) {
        client.cpf = props.client;
        client.name = "Nome não definido";
    }
    return (
        <div>
            <div className="container-data-client">
                <span className="title">Cliente:</span><span> {client.name}</span><br/>
                <span className="title">CPF:</span><span> {client.cpf} </span><br/>
            </div>
        </div>
    )
}
export default DataClient;
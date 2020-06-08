import React from 'react';

import './dataclient.css';

function DataClient (props) {
    console.log("Props Cliente: ", props.client);

    let client = {};
    console.log("CPF Cliente: ", props.client.cpf);

    if (props.client.cpf === undefined) {
        client.cpf = props.client.cpf;
        client.name = "Nome não definido";
    }
    console.log('Esse é o cpf', client.cpf);
    return (
        <div>
            <div className="container-data-client">
                <span className="title">Cliente:</span><span className="name"> {props.client.name}</span><br/>
                <span className="title">CPF:</span><span> {props.client.cpf} </span><br/>
            </div>
        </div>
    )
}
export default DataClient;
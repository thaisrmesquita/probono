import React from 'react';

import './dataclient.css';

function DataClient (props) {
    console.log("Props: ", props);
    return (
        <div>
            <div className="container-data-client">
                <span className="title">Cliente:</span><span> {props.location.state.client}</span><br/>
                <span className="title">CPF:</span><span> {props.location.state.client} </span><br/>
            </div>
        </div>
    )
}
export default DataClient;
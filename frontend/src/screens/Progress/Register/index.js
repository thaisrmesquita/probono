import React from 'react';
import './progressregister.css';

import Topbar from '../../../components/UI/Topbar';
import ProgressForm from '../../../components/Progress/Form';

function ProgressRegister () {
    return (
        <div>
            <Topbar />
            <div className="container-progress-register">
                <ProgressForm />
            </div>
        </div>
    )
}
export default ProgressRegister;
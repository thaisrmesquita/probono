import React from 'react';
import './userregister.css';

import Topbar from '../../../components/UI/Topbar';
import FormRegister from '../../../components/User/Form/Register';

function UserRegister() {
    return (
        <div>
            <Topbar />
            <div>
                <FormRegister />
            </div>
        </div>
    )
}
export default UserRegister;
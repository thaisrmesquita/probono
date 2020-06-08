import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import RegisterLawyer from './pages/Register';
import DashboardLawyer from './pages/DashboardLawyer';

import UserLogin from './screens/User/Login';
import ProcessFindOne from './screens/Process/FindOne';
import ProgressRegister from './screens/Progress/Register';
import UserRegister from './screens/User/Register';
import ProcessClient from './screens/Process/Client';
import ProcessClientFindOne from './screens/Process/Client/FindOne';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ UserLogin }/>
                <Route path="/register" component={ UserRegister }/>
                <Route path="/dashboard/client" render={props => <ProcessClient {...props}/>}/>
                <Route path="/dashboard" render={props => <DashboardLawyer {...props}/>}/>
                <Route path="/progress/register" component={ ProgressRegister }/>
                <Route path="/process" render={props => <ProcessFindOne {...props}/>}/>
                <Route path="/client/process" exact render={props => <ProcessClientFindOne {...props}/>}/>
            </Switch>
        </BrowserRouter>
    );
}
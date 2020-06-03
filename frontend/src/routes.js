import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import RegisterLawyer from './pages/Register';
import HomePage from './pages/HomePage';
import DashboardLawyer from './pages/DashboardLawyer';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ HomePage }/>
                <Route path="/login" component={ Logon }/>
                <Route path="/register" component={ RegisterLawyer }/>
                <Route path="/dashboard" component={ DashboardLawyer }/>
            </Switch>
        </BrowserRouter>
    );
}
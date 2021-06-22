import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import LogIn from "./components/LogIn";
import RegisterForm from './components/RegisterForm';
import NotFound from './components/NotFound'
import Home from './components/Home';
import Notifier from './components/Notifier';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/user/login"/>
                </Route>
                <Route path="/user/login" component={LogIn}/>
                <Route path="/user/register" component={RegisterForm}/>
                <Route path="/user/:username" component={Home}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}
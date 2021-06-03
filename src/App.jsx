import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LogIn from "./components/LogIn";
import RegisterForm from './components/RegisterForm';
import NotFound from './components/NotFound'
import Home from './components/Home';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LogIn}/>
                <Route exact path="/" component={RegisterForm}/>
                <Route exact path="/user" component={Home}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}
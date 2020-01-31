import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './layout/header'

ReactDOM.render(
    <div>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="#">Features</a>
                <a className="p-2 text-dark" href="#">Enterprise</a>
                <a className="p-2 text-dark" href="#">Support</a>
                <a className="p-2 text-dark" href="#">Pricing</a>
            </nav>
            <a className="btn btn-outline-primary" href="#">Sign up</a>
        </div>
        <div className="container">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={App} />
                </Switch>
            </BrowserRouter>

        </div>
        <footer>

        </footer>
    </div>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

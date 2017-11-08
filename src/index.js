import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Foundation from 'react-foundation';
import App from './App';
import Login from './Login';
import Register from './Register';
import {Router, Route, Link} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import registerServiceWorker from './registerServiceWorker';

export const history = createHistory();

ReactDOM.render((<Router history={history}>
    <div>
        <Route path="/" component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
    </div>
</Router>), document.getElementById('root'));
registerServiceWorker();

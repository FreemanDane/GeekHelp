import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Foundation from 'react-foundation';
import App from './App';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();

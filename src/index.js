import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Foundation from 'react-foundation';
import App from './App';
import Login from './Login';
import Register from './Register';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Register />, document.getElementById('root'));
registerServiceWorker();

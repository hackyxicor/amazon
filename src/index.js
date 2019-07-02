import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './firebase.config';

ReactDOM.render(<App />, document.getElementById('message'));
serviceWorker.unregister();

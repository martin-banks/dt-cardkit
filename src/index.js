import React from 'react';
import ReactDOM from 'react-dom';

// import CardKit from './cardkit'
// import CardKitDOM from './dom-test'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './configuration'

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Load CardKit and CardKit DOM
// const CardKit = require('./cardkit');
// const CardKitDOM = require('./dom');

window.config = config

window.layouts = config.layouts

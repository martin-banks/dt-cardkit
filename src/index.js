import React from 'react';
import ReactDOM from 'react-dom';

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

function startCardKit () {
  console.log('stating...')
  // Initialise CardKit
  var cardkit = new window.CardKit(window.config.configuration, {
    themes: window.config.themes,
    layouts: window.config.layouts,
    templates: window.config.templates,
  });
  
  // Initialise Renderer
  var renderer = new window.CardKitDOM(cardkit);

  // OR To render the editing UI
  renderer.renderUI('ui');
}

function checkForCardkit () {
  console.log('checking...')
  if (window.CardKit && window.CardKitDOM) {
    startCardKit()
  } else {
    setTimeout(() => {
      checkForCardkit()
    }, 200)
  }
}

checkForCardkit()


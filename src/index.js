import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App name='lichao'/>, document.getElementById('app'));
//ReactDOM.render(<Test name='lichao' />, document.getElementById('app'));

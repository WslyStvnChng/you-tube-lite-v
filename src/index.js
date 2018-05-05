import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Send info to the DOM by calling the 'root element
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

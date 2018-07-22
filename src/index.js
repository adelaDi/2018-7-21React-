import React from 'react';
import ReactDOM from 'react-dom';
//只要引入css不需要變數
import './index.css'; 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />
    , document.getElementById('root'));
registerServiceWorker();

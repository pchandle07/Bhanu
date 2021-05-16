import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Vitals from './Vitals';
import Main from './requires/main/main';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);


Vitals();

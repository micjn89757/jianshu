import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import { isPhone } from './isPhone'

ReactDOM.render(
  <React.StrictMode>
    <App isPhone={isPhone()} />
  </React.StrictMode>,
  document.getElementById('root')
);



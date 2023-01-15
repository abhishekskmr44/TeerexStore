import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from './context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
reportWebVitals();

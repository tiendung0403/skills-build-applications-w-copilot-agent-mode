import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new root API
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
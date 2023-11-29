import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Starting from './components/Starting';
import App1 from './App1';
import { useNavigate, useLocation } from "react-router-dom";


ReactDOM.render(
  
  <React.StrictMode>
            <App1 />
    
    
  </React.StrictMode>,
  document.getElementById('root')
);
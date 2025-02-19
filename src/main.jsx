import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MarketingMessage from "@pages/MarketingMessage"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MarketingMessage />
  </React.StrictMode>
);

reportWebVitals();

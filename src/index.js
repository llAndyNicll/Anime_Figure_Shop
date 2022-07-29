import React from 'react';
import ReactDOM from 'react-dom/client';
import { Checkout } from './Checkout';

import './css/css.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>
);
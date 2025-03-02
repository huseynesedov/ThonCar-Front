import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";
import "react-datepicker/dist/react-datepicker.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import QualifiersInfo from './components/Qualifiers/QualifiersInfo';
import EventImage from './components/Banners/EventImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QualifiersInfo />
    <EventImage/>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import QualifiersInfo from './components/Qualifiers/QualifiersInfo';
import QualifiersInfoMobile from './components/Qualifiers_mobile/QualifiersInfoMobile';
import EventImage from './components/Banners/EventImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QualifiersInfo/>
    <QualifiersInfoMobile/>
    <EventImage/>
  </React.StrictMode>
);

reportWebVitals();

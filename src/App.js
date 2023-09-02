// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import QualifiersInfo from './components/QualifiersInfo';
import EventImage from './components/Banners/EventImage';

function App() {
  return (
    <div className="App Background">
      <Header/>
      <EventImage/>
      <QualifiersInfo />
    </div>
  );
}

export default App;

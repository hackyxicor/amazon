import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataCollector from './dataCollector.class';
const dc = new DataCollector();

console.log('ip', dc.collectAllData());

function App() {
  return (
    <div className="App">
      <img alt="loading" src={require('./home.png')} style={{ width: '100%', height: '100%', resize: 'block' }} />
    </div>
  );
}

export default App;

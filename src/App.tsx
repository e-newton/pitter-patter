import React from 'react';
import './App.scss';
import Gauge from './components/Gauge';
import CloudIcon from './icons/CloudIcon';
import PartialCloudIcon from './icons/PartialCloudIcon';
import RainIcon from './icons/Rain';
import SunIcon from './icons/SunIcon';

function App() {
  return (
  <>
    <div style={{ width: '300px', height: '400px'}}>
      <Gauge/>
    </div>
    <SunIcon/>
    <CloudIcon/>
    <PartialCloudIcon/>
    <RainIcon/>
  </>
  );
}

export default App;

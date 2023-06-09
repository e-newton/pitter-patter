import React from 'react';
import './App.scss';
import AdditionalData from './components/AdditionalData';
import Forecast from './components/Forecast';
// import Gauge from './components/Gauge';
import WeatherTitle from './components/WeatherTitle';
// import CloudIcon from './icons/CloudIcon';
// import PartialCloudIcon from './icons/PartialCloudIcon';
// import RainIcon from './icons/Rain';
// import SunIcon from './icons/SunIcon';

function App(): JSX.Element {
  return (
  <div className='app-container'>

    <WeatherTitle/>
    <Forecast/>
    <AdditionalData/>
  {
    // <div className='gauge-wrapper'>
    //   <Gauge title="Title" label="Label" percentActive={0.3}/>
    // </div>
    // <SunIcon/>
    // <CloudIcon/>
    // <PartialCloudIcon/>
    // <RainIcon/>
    //
    }
  </div>
  );
}

export default App;

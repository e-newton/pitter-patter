import React from 'react';
import './Forecast.scss';
import ForecastItem from './ForecastItem';

export default function Forecast(): JSX.Element {
  return (
  <div className="forecast-container">
    <ForecastItem/>
    <ForecastItem/>
    <ForecastItem/>
    <ForecastItem/>
    <ForecastItem/>
    <ForecastItem/>
    <ForecastItem/>
    <ForecastItem/>
    <ForecastItem/>
    <ForecastItem/>
  </div>
  );
}

import React from 'react';
import Icon from '../icons/Icon';
import { IconType } from '../icons/IconTypes';
import './WeatherTitle.scss';

export default function WeatherTitle(): JSX.Element {
  return (
  <>
    <span className="location-name">Vancouver, Canada</span>
    <div className="weather-icon-container">
      <Icon icon={IconType.Sun}/>
    </div>
    <span className="temperature">16°</span>
    <div className="high-low">
      <span className="low">L: 10˚</span>
      <span className="high">H: 18˚</span>
    </div>
  </>
  );
}

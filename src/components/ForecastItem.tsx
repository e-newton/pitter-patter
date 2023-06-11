import React from 'react';
import Icon from '../icons/Icon';
import { IconType } from '../icons/IconTypes';
import './ForecastItem.scss';

export default function ForecastItem(): JSX.Element {
  return (
  <div className='forecast-item'>
    <span>Sunday</span>
    <div className='icon-container'>
      <Icon icon={IconType.Rain}/>
    </div>
    <div className="high-low">
      <span className="low">L: 10˚</span>
      <span className="high">H: 18˚</span>
    </div>
  </div>
  );
}

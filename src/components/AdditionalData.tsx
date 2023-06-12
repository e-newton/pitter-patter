import React from 'react';
import './AdditionalData.scss';
import Pressure from './Pressure';

export default function AdditionalData(): JSX.Element {
  return (
  <div className='additional-data'>
    <div className='additional-data-block'>
      <Pressure/>
    </div>
  </div>
  );
}

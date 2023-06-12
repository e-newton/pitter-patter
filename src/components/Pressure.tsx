import React from 'react';
import './Pressure.scss';

export default function Pressure(): JSX.Element {
  return (
  <>
    <span className='additional-data-block-title'>Pressure</span>
    <div className='additional-data-block-data'>
      <span className='pressure'>1,014hPa</span>
    </div>
  </>
  );
}

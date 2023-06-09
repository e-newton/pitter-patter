import React from 'react';
import './Rain.scss';
import rainCloud from './icon-images/Rain Cloud.svg';
import rainR1 from './icon-images/Rain R1.svg';
import rainR2 from './icon-images/Rain R2.svg';
export default function RainIcon(): JSX.Element {
  return (
  <>
    <img src={rainR1} className="r1"/>
    <img src={rainR2} className="r2"/>
    <img src={rainR1} className="r3"/>
    <img src={rainR2} className="r4"/>
    <img src={rainCloud}/>
  </>
  );
}

import React from 'react';
import './PartialCloudIcon.scss';
import partialSun from './icon-images/Partial Cloud Sun.svg';
import partialCloud from './icon-images/Partial Cloud Cloud.svg';
export default function PartialCloudIcon(): JSX.Element {
  return (
  <>
    <img src={partialSun} className="sun"/>
    <img src={partialCloud} className="cloud"/>
  </>
  );
}

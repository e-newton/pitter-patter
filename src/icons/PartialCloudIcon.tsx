import React from "react";
import './PartialCloudIcon.scss'
import partialSun from './icon-images/Partial Cloud Sun.svg'
import partialCloud from './icon-images/Partial Cloud Cloud.svg'
export default function PartialCloudIcon() {
  return (
  <div className="container">
    <img src={partialSun} className="sun"/>
    <img src={partialCloud} className="cloud"/>
  </div>
  )
}

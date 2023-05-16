import React from "react";
import './CloudIcon.scss'
import cloudBase from './icon-images/Cloud Base.svg'
import cloudLeft from './icon-images/Cloud Left.svg'
import cloudRight from './icon-images/Cloud Right.svg'

export default function CloudIcon() {
  return (
  <>
    <img src={cloudBase} className="base"/>
    <img src={cloudLeft} className="left"/>
    <img src={cloudRight} className="right"/>
  </>
  )
}

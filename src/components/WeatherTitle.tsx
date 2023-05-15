import React from "react";
import RainIcon from "../icons/Rain";
import './WeatherTitle.scss'

export default function WeatherTitle() {
  return (
  <>
    <span className="location-name">Vancouver, Canada</span>
    <div className="weather-icon-container">
      <RainIcon/>
    </div>
    <span className="temperature">16°</span>
    <div className="high-low">
      <span className="low">L: 10˚</span>
      <span className="high">H: 18˚</span>
    </div>
  </>
  )
}

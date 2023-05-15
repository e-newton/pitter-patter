import React, { useState } from "react";
import './Gauge.scss'

function degrees_to_radians(degrees: number)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

export default function Gauge() {
  const steps = 30;
  const [percentActive, setPercentActive] = useState(0.5);
  // Starting deg = 225degs

  function generateNubs() {
    const elems = [];
    const totalDegrees = 270;
    const scale = 0.8;
    const stepSize = totalDegrees / (steps);
    const initalRotation = 135;
    for (let i = 0; i <= steps; i++) {
      let className = 'nub'
      if (percentActive && i/steps <= percentActive) {
        className = 'nub active'
      }
      const rotation = initalRotation + (i * stepSize);
      const cos = Math.cos(degrees_to_radians(rotation));
      const sin = Math.sin(degrees_to_radians(rotation));
      // Mapped from 0 to 1
      let cosMapped = (cos + 1) / 2;
      let sinMapped = (sin + 1) / 2;

      cosMapped = (cosMapped * scale) + ((1 - scale) / 2)
      sinMapped = (sinMapped * scale) + ((1 - scale) / 2)
      const xTranslate = cosMapped * 100;
      const yTranslate = sinMapped * 100;

      elems.push(
        (
          <div key={i} className="nub-wrapper" style={{transform: `translate(${xTranslate}%, ${yTranslate}%)`}}>
            <div className={className} style={{transform: ` translate(-50%, -50%) rotate(${rotation}deg)`}}></div>
          </div>
        )
      )
    }
    return elems;
  }

  return(
  <>
    <div className="gauge-container">
      <span className="title">Pressure</span>
      <div className="gauge-body">
        {
          generateNubs()
        }
        <div className="label-container">
          <span>1,027hPa</span>
        </div>
      </div>
    </div>
  </>
  )
}

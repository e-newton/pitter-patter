import React from 'react';
import './Gauge.scss';

function degreesToRadians(degrees: number): number {
  const pi = Math.PI;
  return degrees * (pi / 180);
}

export interface GaugeProps {
  steps?: number
  percentActive: number
  label?: string
  title: string
}

export default function Gauge(props: GaugeProps): JSX.Element {
  const DEFAULT_STEPS = 30;
  // Starting deg = 225degs

  function generateNubs(): JSX.Element[] {
    const steps = props.steps ?? DEFAULT_STEPS;
    const elems = [];
    const totalDegrees = 270;
    const scale = 0.8;
    const stepSize = totalDegrees / (steps);
    const initalRotation = 135;
    for (let i = 0; i <= steps; i++) {
      let className = 'nub';
      if (props.percentActive && i / steps <= props.percentActive) {
        className = 'nub active';
      }
      const rotation = initalRotation + (i * stepSize);
      const cos = Math.cos(degreesToRadians(rotation));
      const sin = Math.sin(degreesToRadians(rotation));
      // Mapped from 0 to 1
      let cosMapped = (cos + 1) / 2;
      let sinMapped = (sin + 1) / 2;

      cosMapped = (cosMapped * scale) + ((1 - scale) / 2);
      sinMapped = (sinMapped * scale) + ((1 - scale) / 2);
      const xTranslate = cosMapped * 100;
      const yTranslate = sinMapped * 100;

      elems.push(
        (
          <div key={i} className="nub-wrapper" style={{ transform: `translate(${xTranslate}%, ${yTranslate}%)` }}>
            <div className={className} style={{ transform: ` translate(-50%, -50%) rotate(${rotation}deg)` }}></div>
          </div>
        )
      );
    }
    return elems;
  }

  return (
  <>
    <div className="gauge-container">
      <span className="title">{props.title}</span>
      <div className="gauge-body">
        {
          generateNubs()
        }
        {
          props.label &&
          <div className="label-container">
            <span>{props.label ?? ''}</span>
          </div>
        }
      </div>
    </div>
  </>
  );
}

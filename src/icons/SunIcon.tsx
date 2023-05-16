import React from 'react';
import './SunIcon.scss'
import sunCore from './icon-images/Sun Core.svg'
import sunBeamsXY from './icon-images/Sun Beams XY.svg'
import sunBeamsDiag from './icon-images/Sun Beams Diag.svg'

export default function SunIcon() {
  return (
  <>
    <img className='sun-core' src={sunCore} alt={'Sun Core'} />
    <img className='sun-beams' src={sunBeamsXY} alt={'Sun Beams'}/>
    <img className='sun-beams diag' src={sunBeamsDiag} alt={'Sun Beams'}/>
  </>
  )
}

import React from "react";
import CloudIcon from "./CloudIcon";
import './Icon.scss'
import { IconSize, IconType } from "./IconTypes";
import PartialCloudIcon from "./PartialCloudIcon";
import RainIcon from "./Rain";
import SunIcon from "./SunIcon";

type IconProps = {
  icon: IconType,
  size?: IconSize
}

export default function Icon({icon, size=IconSize.Medium}: IconProps) {
  const getClassName = (): string => {
    const baseClass = 'container'
    const iconSize = size;
    return [baseClass, iconSize, icon].join(' ')
  }

  const getIcon = () => {
    if (icon === IconType.Sun) return <SunIcon/>;
    if (icon === IconType.Rain) return <RainIcon/>;
    if (icon === IconType.Cloud) return <CloudIcon/>;
    if (icon === IconType.PartialCloud) return <PartialCloudIcon/>;
  }

  return (
  <div className={ getClassName() }>
    {
      getIcon()
    }
  </div>
  )

}

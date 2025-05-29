import React from 'react'
import LogoIcon from '@/assets/icons/logo.svg'
import { SvgProps } from 'react-native-svg'


const Logo = ({...props}:SvgProps) => {
  return (
    <LogoIcon {...props}/>
  )
}

export default Logo
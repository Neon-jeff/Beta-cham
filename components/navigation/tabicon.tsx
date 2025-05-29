import { View } from 'react-native'
import { Text } from '../ui/text'
import React, { FunctionComponent } from 'react'
import Svg, { SvgProps } from 'react-native-svg'

interface TabIconProps {
    focused : boolean,
    Icon: FunctionComponent<SvgProps>
}


const TabIcon = ({focused,Icon}:TabIconProps) => {
  return (
    <>
    <Icon height={22} width={22} color={focused?'white' : 'gray'}  strokeWidth={1.5}/>
    </>
  )
}

export default TabIcon
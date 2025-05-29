import { View } from 'react-native'
import { Text } from '../ui/text'
import React from 'react'
import { BellNotification, Menu } from 'iconoir-react-native'
import { ChevronDown, LocateIcon } from 'lucide-react-native'

const Header = () => {
  return (
    <View className='mt-5'>
        <View className='flex-row items-center justify-between '>
        <View>
            <Text className='text-sm text-zinc-500'>Deliver to</Text>
            <View className='flex-row items-center gap-1'>
            <LocateIcon height={15} width={15} color='#ea580c' strokeWidth={1.5}/>
            <Text className='font-semibold text-base text-orange-600'>Ugborikoko Town, Muse'</Text>
            <ChevronDown height={15} width={15} color='#ea580c' strokeWidth={2.5} className='self-end'/>
            </View>
        </View>
        <BellNotification height={25} width={25} color='black' strokeWidth={1.5}/>
        </View>
    </View>
  )
}

export default Header
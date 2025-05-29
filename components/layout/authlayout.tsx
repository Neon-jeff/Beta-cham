import { View } from 'react-native'
import { Text } from '../ui/text';
import React from 'react'
import { Logo } from '../svg';
import GoBack from '../navigation/goback';

interface AuthLayoutProps{
    children?: React.ReactNode;
    title: string;
    description: string;
}

const Authlayout = ({children,title,description}:AuthLayoutProps) => {
  return (
    <View className='bg-black  gap-5 pt-10 flex-1'>
        <View className='absolute top-20 left-0  rounded-xl '>
            <GoBack/>
        </View>
        <View className='mt-10 gap-1  px-5 pt-20'>
        <Text className='text-3xl font-semibold text-white '>{title}</Text>
        <Text className='text-base  text-zinc-400  '>{description}</Text>
        </View>
      {/* form component */}
      <View className='bg-white flex-1 p-10 px-8 rounded-t-[30px]'>
        {children}
      </View>
    </View>
  )
}

export default Authlayout
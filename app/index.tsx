import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'


const Index = () => {
  if (true) {
    return <Redirect href='/(tabs)/home' />
  }
  return (
    <View className='px-10 items-center justify-center flex-1' >
      <Text className=' text-2xl font-medium' >Sabi chef is here</Text>
    </View>
  )
}

export default Index
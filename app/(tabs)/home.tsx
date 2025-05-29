import { Pressable, View } from 'react-native'
import { Text } from '~/components/ui/text'
import React from 'react'
import { Header } from '~/components/home'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import Offers from '~/components/home/offers'
import { Input } from '~/components/ui/input'
import { Search } from 'iconoir-react-native'

const Home = () => {
  return (
    <SafeAreaView className='px-5 gap-5'>

      {/* <View className='bg-primary-200 h-56 w-56 rounded-full absolute -right-10 -top-10'/> */}
      <Header/>
      <View className='border rounded-xl border-zinc-200 bg-red-100  '>
      <Input placeholder='Search for your favorite food' className='bg-zinc-100'/>
      <Pressable className='absolute  top-0 bottom-0 justify-center right-5'>
        <Search height={24} width={24} color={'black'}/>
        </Pressable>

      </View>
      <View className='h-32 bg-primary-200 rounded-xl'/>
        <Text className='font-semibold text-xl pr-48' numberOfLines={2}>
      Our Special Promos
      </Text>
      <Offers/>

    </SafeAreaView>
  )
}

export default Home
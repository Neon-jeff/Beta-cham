import { FlatList, StyleSheet, View } from 'react-native'
import { Text } from '../ui/text'
import React from 'react'
import {FlashList} from '@shopify/flash-list'
import { offers } from '~/data/home/offers'
import { Image } from 'expo-image'
import { LocateIcon } from 'lucide-react-native'


interface offerProps {
  id: string;
  title: string;
  discount: number;
  image: string;
  price: number;
  rating: number;
  background: string;
}

const OffersCard = ({...props}:offerProps) => {

  
    return (
        <View className={`mr-5 h-36 p-4 px-3 bg-yellow-100 rounded-xl w-56 `} style={{backgroundColor:`#000000`}}>
        <View className='z-50 justify-center flex-1'>
          <Text className='text-primary-300 absolute top-0 right-0 font-semibold'>-{props.discount}% off</Text>
        <Text className='text-sm font-semibold pr-8 text-white' >{props.title}</Text>
        <Text className='text-xl font-bold text-orange-300' >${props.price}</Text>
        <View className='flex-row gap-2 items-center absolute bottom-0'>
         
            <LocateIcon color={'#e4e4e7'} size={14}/>
            <Text className='text-zinc-200 text-xs font-semibold'>Relisha kitchens delights</Text>
        </View>
        </View>
        {/* <Image source={props.image} style={{aspectRatio:1}} contentFit='contain'/> */}
        <Image style={[StyleSheet.absoluteFillObject,{borderRadius:10,opacity:.5}]} source={props.image} blurRadius={0} />
        </View>
    )
}



const Offers = () => {
  return (
    <View className=' w-full' style={{height:200}}>
      <FlashList data={offers} showsHorizontalScrollIndicator={false} renderItem={({item})=><OffersCard {...item}/>} horizontal />
    </View>
  )
}

export default Offers
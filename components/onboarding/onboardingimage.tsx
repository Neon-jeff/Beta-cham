import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import chef from '@/assets/images/onboarding/chef.png'
import bread from '@/assets/images/onboarding/cannoli.png'


const OnboardingImage = () => {
    return (
        <View className=' rounded-2xl overflow-clip '>
            <Image source={chef} contentFit='contain' className='h-20 w-20' style={{ aspectRatio: 1, transform: [{ scale: 1.2 }] }}  />
            {/* <View className='absolute bg-primary-700  bottom-2 h-16 w-1/2 self-center bg-opacity-10'  /> */}
        </View>
    )
}

export default OnboardingImage
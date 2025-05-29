import { View, } from 'react-native'
import { Text } from '~/components/ui/text'
import React from 'react'
import { Logo } from '~/components/svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import OnboardingImage from '~/components/onboarding/onboardingimage'
import { Button } from '~/components/ui/button'
import { router } from 'expo-router'



const Onboarding = () => {
  return (
    <SafeAreaView className='px-10 bg-gray-100  gap-10  flex-1 ' >
      <View className='self-end   p-3   rounded-xl' >
        <Logo width={46} height={46} fill={'#ea580c'} className='bg-red-200' />
      </View>
      <OnboardingImage />
      <View className=''>
        <Text className=' text-4xl py-2 text-primary-600  font-semibold' >Quality and Healthy Catering</Text>
        <Text className='text-zinc-600 font-regular text-lg'>Diverse, qualilty and healthy catering services around you</Text>
      </View>
      
      <View className='gap-4 absolute  justify-center bottom-16 left-8 right-8'>
        <Button variant={'secondary'} className='bg-black' onPress={() => {router.push('/(auth)/signup') }}>
          <Text className='font-medium text-white'>Create Account</Text>
        </Button>
        <Button variant={'secondary'}>
          <Text className='font-medium text-black' >View as Guest</Text>
        </Button>
      </View>

    </SafeAreaView>
  )
}

export default Onboarding
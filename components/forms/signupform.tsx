import { View} from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import { useForm, Controller } from 'react-hook-form'
import FormInput from '../shared/forminput'
import { Button } from '../ui/button'
import Google from '~/assets/icons/google.svg'
import { Link } from 'expo-router'

const SignupForm = () => {
  const { control, handleSubmit } = useForm()
  return (
    <View className='gap-5'>
      <View className='flex-row items-center gap-3 justify-center border border-zinc-200 bg-zinc-50 mb-5 p-3 rounded-xl '>
        <Google/>
        <Text>Continue with Google</Text>
      </View>
      <FormInput control={control} name='fullname' label='Full Name' placeholder='Enter your name' />
      <FormInput control={control} name='email' label='Email' placeholder='Enter your email' />
      <FormInput control={control} name='password' label='Password' placeholder='Enter your password' secureTextEntry />
      <Button variant={'default'} className='mt-5'>
        <Text>Create Account</Text>
      </Button>
      <Text className='text-zinc-600 text-center'>Already have an account? <Link href={'/(auth)/login'} className='text-orange-500  font-semibold'>Login</Link></Text>
    </View>
  )
}

export default SignupForm
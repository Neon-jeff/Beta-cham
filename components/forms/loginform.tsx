import { View} from 'react-native'
import React from 'react'
import { Text } from '../ui/text'
import { useForm, Controller } from 'react-hook-form'
import FormInput from '../shared/forminput'
import { Button } from '../ui/button'
import Google from '~/assets/icons/google.svg'
import { Link, router } from 'expo-router'

const LoginForm = () => {
  const { control, handleSubmit } = useForm()
  return (
    <View className='gap-5'>
      <View className='flex-row items-center gap-3 justify-center border border-zinc-200 bg-zinc-50 mb-5 p-3 rounded-xl '>
        <Google/>
        <Text>Login with Google</Text>
      </View>
      <FormInput control={control} name='email' label='Email' placeholder='Enter your email' />
      <FormInput control={control} name='password' label='Password' placeholder='Enter your password' secureTextEntry />
      <Button variant={'default'} className='mt-5' onPress={()=>{router.push('/(auth)/otp')}}>
        <Text>Login</Text>
      </Button>
      <Text className='text-zinc-600 text-center'>No account yet? <Link href={'/(auth)/signup'} className='text-orange-500  font-semibold'>Create Account</Link></Text>
    </View>
  )
}

export default LoginForm
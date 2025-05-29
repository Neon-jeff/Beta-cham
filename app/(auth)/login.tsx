import { View} from 'react-native'
import { Text } from '~/components/ui/text'
import React from 'react'
import Authlayout from '~/components/layout/authlayout'
import { LoginForm } from '~/components/forms'

const Login = () => {
  return (
    <Authlayout title='Login' description='Welcome back to your account'>
      <LoginForm/>
    </Authlayout>
  )
}

export default Login
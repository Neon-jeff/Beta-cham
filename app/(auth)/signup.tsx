import { View, Text } from 'react-native'
import React from 'react'
import Authlayout from '~/components/layout/authlayout'
import { SignupForm } from '~/components/forms'

const Signup = () => {
  return (
    <Authlayout title='Create Account' description='Begin your experience with our state of the art services'>
        <SignupForm />
    </Authlayout>
  )
}

export default Signup
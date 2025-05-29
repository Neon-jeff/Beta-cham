import { View, Text } from 'react-native'
import React from 'react'
import Authlayout from '~/components/layout/authlayout'
import { OTPForm } from '~/components/forms'

const OTP = () => {
  return (
    <Authlayout title='Verify Your Email' description='Enter the 4 digit code sent to your email'>
        <OTPForm />
    </Authlayout>
  )
}

export default OTP
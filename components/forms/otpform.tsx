import { View, Pressable, TextInput, Keyboard, NativeSyntheticEvent, TextInputChangeEventData, TextInputKeyPressEventData } from 'react-native'
import { Text } from '~/components/ui/text'
import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { set } from 'react-hook-form'

const OTPForm = () => {
    const [otp, setOtp] = useState<Array<string>>([])
    const [isEditing, setIsEditing] = useState(false)

    const inputRef = useRef<TextInput>(null)

    useEffect(() => {
        handleFocus()
        if (otp.length === 4) {
            handleBlur()
        }
    }, [otp])

    const handleFocus = () => {
        inputRef.current?.focus()

    }

    const handleBlur = () => {
        inputRef.current?.blur()
    }

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      
        if (otp.length >= 4 ) {
            handleBlur()
            return
        }
        setOtp([...e.nativeEvent.text])
        console.log(otp)
    }

    const HandleBackSpace = (e:NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (e.nativeEvent.key === "Backspace"){
            otp.pop()
            
        }
    }

    const checkNextFilled = (index : number) => {
        const unfilledArr = [0,1,2,3].filter(item => !otp[item])
        return index === Math.min(...unfilledArr)
    }

    return (
        <View className='flex-1'>
            <View className='gap-5 flex-row self-center mt-10'>
                {
                    [...Array(4).keys()].map((_, index) => <Pressable className={`bg-zinc-50 border ${checkNextFilled(index) ? 'border-zinc-800':'border-zinc-200'} w-16 h-16 rounded-lg items-center justify-center`} onPress={handleFocus} key={index}>
                        <Text>{otp[index] || ''}</Text>
                    </Pressable>)
                }
            </View>

            {/* input element */}
            <Text className='text-center pt-5 text-zinc-600 text-base'>Click the button below to verify your OTP code </Text>
            <View className='opacity-0'>
                <Input ref={inputRef} value={`${otp.join('')}`} autoFocus onKeyPress={HandleBackSpace} onChange={handleChange} inputMode='numeric'  />
            </View>

            <Button className='absolute bottom-5 w-full'><Text className='text-xl'>Verify OTP</Text></Button>
        </View>
    )
}

export default OTPForm
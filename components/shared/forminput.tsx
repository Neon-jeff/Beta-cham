import { TextInputProps, View, } from 'react-native'
import React from 'react'
import { Text } from '../ui/text';
import { Control, Controller } from 'react-hook-form'
import { Input } from '../ui/input';

interface FormInputProps extends TextInputProps {
    name: string;
    control: Control
    label: string;
    
}

const FormInput = ({ control, label, name, ...props }: FormInputProps) => {
    return (
        <Controller control={control} name={name} render={({field:{onChange, onBlur, value}}) => (<View className='gap-1'>
            <Text className='text-base font-medium text-zinc-500 '>{label}</Text>
            <Input {...props} onChange={onChange} onBlur={onBlur} value={value} className='border-zinc-300'/>
        </View>)} />
    )
}

export default FormInput
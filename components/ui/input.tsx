import * as React from 'react';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData, type TextInputProps } from 'react-native';
import { View } from 'react-native';
import Animated, { interpolateColor, withTiming } from 'react-native-reanimated';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { cn } from '~/lib/utils';

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, TextInputProps>(
  ({ className, placeholderClassName, ...props }, ref) => {
    const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
    const isFocusedProgress = useSharedValue(0);
    const focusedColor = '#23a98b';
    const blurColor = '#fafafa';
    const animatedstyles = useAnimatedStyle(() => {
      const borderColor= interpolateColor(isFocusedProgress.value, [0, 1], [blurColor, focusedColor]);
      
      return ({
        borderColor
      })
    });
    const handleBlur = (e:NativeSyntheticEvent<TextInputFocusEventData>) => {
      isFocusedProgress.value = withTiming(0);
      props.onBlur?.(e);
    }

    const handleFocus = (e:NativeSyntheticEvent<TextInputFocusEventData>) => {
      isFocusedProgress.value = withTiming(1);
      props.onFocus?.(e);
    }
    return (
      <AnimatedTextInput
        ref={ref}
        className={cn(
          'web:flex h-10 native:h-14 web:w-full font-regular rounded-xl  border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-base native:text-zinc-800 bg-zinc-50 native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 ',
          props.editable === false && 'opacity-50 web:cursor-not-allowed',
          className
        )}
        placeholderClassName={cn(' font-regular text-black', placeholderClassName)}
        placeholderTextColor={'#a1a1aa'}
        {...props}
        style={[props.style, animatedstyles]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

    );
  }
);

Input.displayName = 'Input';

export { Input };

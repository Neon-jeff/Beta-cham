import { Pressable, View } from 'react-native'
import { Text } from '../ui/text'
import React, { FunctionComponent, useEffect } from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import {  HomeSimple, ProfileCircle, Search, ShoppingBag, } from 'iconoir-react-native'
import TabIcon from './tabicon'
import { ChefHat,  HomeIcon, ShoppingBasket } from 'lucide-react-native'
import Chef from '~/assets/icons/chef.svg'
import { SvgProps } from 'react-native-svg'

interface TabBarProps extends BottomTabBarProps {

}

type iconType = {[key:string]:FunctionComponent<SvgProps>}


const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
    const icons : iconType = {
        home: HomeSimple,
        chefs:ChefHat,
        account : ProfileCircle,
        orders : ShoppingBag,
        shop: Search
    }
const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
    return (
        <View className='bg-white  bottom-8 p-4 py-5 w-[90%] self-center rounded-full flex-row  justify-between'>
            {
                state.routes.map((routeToScreen, index) => {
                    const scaleProgress = useSharedValue<number>(0)
                    const styles = useAnimatedStyle(()=>{
                        const scaleX = interpolate(scaleProgress.value,[0,1],[1,1.1])
                        const translateX= interpolate(scaleProgress.value,[0,1],[0,5])
                        const backgroundColor = interpolateColor(scaleProgress.value,[0,1],['#fff','#1a8771'])
                        return {
                            transform:[{translateX}],
                          
                        }
                    })
                    const isFocused = state.index === index
                    const handleMove = () =>{
                        if(isFocused) return
                        navigation.navigate(routeToScreen.name)
                    }

                    useEffect(()=>{
                        if(!isFocused){
                            scaleProgress.value = withTiming(0)
                        }
                        if(isFocused){
                            scaleProgress.value = withTiming(1)
                        }
                    },[isFocused])

                                       
                    return (<AnimatedPressable key={routeToScreen.key} className={`p-3 py-3 rounded-full flex-row gap-1 items-center ${isFocused?'bg-primary-500':'bg-white'}`} onPress={handleMove} style={[styles]}>
                        <TabIcon focused={isFocused} Icon={icons[routeToScreen.name]} />
                        {isFocused && <Text className={`text-sm font-semibold capitalize ${isFocused ? 'text-white':''}`}>{routeToScreen.name}</Text>}
                    </AnimatedPressable>)
                })
            }
        </View>
    )
}

export default TabBar
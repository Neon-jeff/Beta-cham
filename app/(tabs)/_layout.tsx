import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '~/components/navigation/tabbar'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false,sceneStyle:{backgroundColor:'#f9f9f9'}}}   tabBar={(props)=><TabBar {...props}/>} >
            <Tabs.Screen name='home' options={{
                
            }} />
            <Tabs.Screen name='chefs'  />
            <Tabs.Screen name='shop' />
            <Tabs.Screen name='orders' />
            <Tabs.Screen name='account' />
        </Tabs>
    )
}

export default TabsLayout
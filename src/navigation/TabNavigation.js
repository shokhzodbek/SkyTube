import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screen/HomeScreen'
import Explore from '../screen/Explore'
import Home from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
const TabNavigation = () => {
      return (
           <Tab.Navigator tabBarOptions={{
                 activeTintColor:'red',
                 inactiveTintColor:'grey'
           }}>
                 <Tab.Screen 
                 name="Home" 
                 component={HomeScreen}
                 options={{
                       tabBarIcon:()=><Home name="home" size={30} color={'red'}/>
                 }}
                 
                 />
                 <Tab.Screen 
                 name="Explore" 
                 component={Explore}
                 options={{
                       tabBarIcon:()=><Icon name="explore" size={30} color="red"/>
                 }}
                 />
           </Tab.Navigator>
      )
}

export default TabNavigation

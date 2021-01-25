import React from 'react'
import { View, Text } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Explore from '../screen/Explore'
const drawer = createDrawerNavigator()
const Drawer = () => {
      <drawer.Navigator>
            <drawer.Screen name='expo' component={Explore}/>
      </drawer.Navigator>
}

export default Drawer

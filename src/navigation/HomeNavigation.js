import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from '../screen/HomeScreen'
import SearchScreen from '../screen/SearchScreen';
import TabNavigation from './TabNavigation'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../reducer/reducer'
import FirstScreen from '../screen/FirsScreen';
import PlayerScreen from '../screen/Player';
const store = createStore(reducer)
const Stack = createStackNavigator()
const HomeNavigation = () => {
      return (<Provider store={store}>
            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen 
                        name="first" 
                        component={FirstScreen}
                        options={{
                              headerShown:false
                        }}
                        />
                        <Stack.Screen 
                        name="Home" 
                        component={TabNavigation} 
                        options={{
                         headerShown:false
                        }}/>
                        <Stack.Screen 
                        name="Search" 
                        component={SearchScreen} 
                        options={{
                              headerShown:false
                        }}/>
                        <Stack.Screen
                         name="play" 
                         component={PlayerScreen}
                         options={{
                               headerTitle:"SkyTube"
                         }}/>
                  </Stack.Navigator>
            </NavigationContainer>
            </Provider>
      )
}

export default HomeNavigation;

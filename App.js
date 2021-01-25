/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import HomeNavigation from './src/navigation/HomeNavigation'
import HomeScreen from './src/screen/HomeScreen';
const App = ()=> {

  return (
    <>
   <StatusBar/>
    <HomeNavigation/>
    </>
  );
};



export default App;

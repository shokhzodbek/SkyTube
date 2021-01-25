import React from 'react'
import { View, Text, Pressable } from 'react-native'
import Search from 'react-native-vector-icons/EvilIcons'
import Menu from 'react-native-vector-icons/Feather'
import Video from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
const Header = () => {
      const navigation = useNavigation()
      return (
            <View style={styles.container}>
                  <Pressable 
                  style={styles.search}
                  onPress={()=>navigation.navigate("Search")}
                  >
                  <Search name={'search'} size={30} color={'red'}/>
                  <Text style={{color:'red',fontSize:15,fontWeight:'bold'}}>What would you like to watch?</Text>
                  </Pressable>
                  <View style={styles.icons}>
                  <Video name={'video-library'} size={30} color="red" style={{marginRight:5}}/>
                      <Menu name={'menu'} size={30} color={'red'}/>
                        
                  </View>
            </View>
      )
}

export default Header

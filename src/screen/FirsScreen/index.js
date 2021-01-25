import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './style'
import {useNavigation} from '@react-navigation/native'
const FirstScreen = () => {
      const navigation = useNavigation()
      return (
            <View style={styles.container}>
                  <Image style={styles.image} source={require('../../../assets/images/sky.png')}/>
                  <Pressable style={styles.button} onPress={()=>navigation.navigate('Home')}>
                        <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>Enter</Text>
                  </Pressable>
            </View>
      )
}

export default FirstScreen

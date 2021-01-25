import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
const Card = ({videoId,title}) => {
      const navigation = useNavigation()
      return (<TouchableOpacity onPress={()=>navigation.navigate("play",{videoId:videoId,title:title})}>
            <View style={styles.container}>
                  <Image style={styles.image} source={{uri:`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}}/>
                  <Text ellipsizeMode='tail' numberOfLines={2} style={{fontSize:16,fontWeight:'600',color:'red',marginVertical:10}}>{title}</Text>
            </View>
            </TouchableOpacity>
      )
}

export default Card

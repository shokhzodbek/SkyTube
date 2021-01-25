import React from 'react'
import { View, Text,Image,TouchableOpacity} from 'react-native'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
const MineCard = ({title,channel,videoId}) => {
      const navigation = useNavigation()
      return (
            <TouchableOpacity onPress={()=>navigation.navigate("play",{videoId:videoId,title:title})}>
            <View style={styles.container}>
                  <Image style={styles.image} source={{uri:`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`}}/>
                  <View>
                        <Text 
                        numberOfLines={3}
                        style={styles.text1}
                         ellipsizeMode="tail">{title}
                         </Text>
                        <Text style={styles.text2}>{channel}</Text>
                  </View>
            </View></TouchableOpacity>
      )
}

export default MineCard

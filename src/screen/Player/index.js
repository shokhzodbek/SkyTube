import React from 'react'
import { View, Text } from 'react-native'
import {WebView} from 'react-native-webview'
import Header from '../../components/Header'

import styles from './styles'
const PlayerScreen = ({route}) => {
      const {videoId,title} = route.params
      return (
            <View >
                  <View style={styles.video}>
                   <WebView 
                   javaScriptEnabled={true}
                   domStorageEnabled={true}
                   source={{ uri:`https://www.youtube.com/embed/${videoId}`}} />
                  </View>
                  <Text style={{fontSize:20,marginTop:10}}>{title}</Text>
            </View>
      )
}

export default PlayerScreen

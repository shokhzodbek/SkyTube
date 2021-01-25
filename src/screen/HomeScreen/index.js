import React from 'react'
import { View, Text, Pressable ,FlatList,TouchableOpacity} from 'react-native'
import Header from '../../components/Header'
import Card from '../../components/Card'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
const HomeScreen = () => {
      const cardData = useSelector(state=>state)
      const navigation = useNavigation()
      return (
            <View style={{backgroundColor:'#f2d7c9',height:'100%'}}>
                  <Header/>
                  <FlatList
                  keyExtractor={item=>item.id.videoId}
                  data={cardData}
                  renderItem={({item})=><Card title={item.snippet.title} videoId={item.id.videoId}/>}
                  />
            </View>
      )
}

export default HomeScreen

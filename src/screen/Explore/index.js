import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CardExplore from '../../components/CardExplore'
import data from '../../../assets/data/data'
import Header from '../../components/Header'
const Explore = () => {
      return (
            <View style={{backgroundColor:'#f2d7c9',height:'100%'}}>
                  <Header/>
                  <View style={{marginTop:100}}>
                  <FlatList
                  numColumns={2}
                  contentContainerStyle={{justifyContent:'space-around',alignItems:'center'}}
                  data={data}
                  keyExtractor={item=>item.id}
                  renderItem={({item})=><CardExplore image={item.img}/>}
                  />
                  </View>
            </View>
      )
}

export default Explore

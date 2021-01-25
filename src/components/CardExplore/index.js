import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

const CardExplore = ({image}) => {
      return (
            <View style={{margin:10}}>
                  <Image style={{width:Dimensions.get('window').width*35/100,
                  height:Dimensions.get('window').width*35/100,
            borderRadius:Dimensions.get('window').width*35/100/2}}
                  source={image}/>
            </View>
      )
}

export default CardExplore

import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
      container:{
         margin:10,
         flexDirection:'row',
         elevation:3,
         backgroundColor:'white',
         padding:5
      },
      text1:{
        fontSize:19,
        width:Dimensions.get('window').width*40/100
      },
      text2:{
         fontSize:15,
         width:Dimensions.get("window").width/2,
      },
      image:{
          width:Dimensions.get("window").width/2,
          height:120,
          marginRight:5,
          backgroundColor:'red'
      }
})
export default styles

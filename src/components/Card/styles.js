import React from 'react'
import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  image:{
        width:'100%',
        height:200
  },
  container:{
        width:Dimensions.get('window').width*90/100,
        backgroundColor:'white',
        padding:10,
        marginHorizontal:Dimensions.get('window').width*5/100,
        elevation:3,
        marginTop:10,
       

  }
})

export default styles

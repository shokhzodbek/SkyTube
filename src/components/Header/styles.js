import React from 'react'
import { StyleSheet,Dimensions } from 'react-native'

const styles = StyleSheet.create({
      container:{
            backgroundColor:'white',
            flexDirection:'row',
            justifyContent:'space-between',
            padding:10,
            elevation:3
            

      },
      search:{
            backgroundColor:'white',
            width:Dimensions.get('window').width*70/100,
            padding:10,
            flexDirection:'row',
            alignContent:'center',
            justifyContent:'center',
            borderRadius:20,
            elevation:3


      },
      icons:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
      }
})

export default styles

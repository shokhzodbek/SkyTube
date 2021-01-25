import React,{useState,useEffect} from 'react'
import { View, Text, TextInput, ScrollView,FlatList, ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './styles'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import MineCard from '../../components/MineCard'
import {useNavigation} from '@react-navigation/native'
import {useSelector,useDispatch} from 'react-redux'
const SearchScreen= () => {
      const navigation = useNavigation()
      const [input,setInput] = useState('')
      //const [data,setData] = useState([])
      const dispatch = useDispatch()
      const data1 = useSelector(state=>{
            return state  
      })
      const [loading,setLoading] = useState(false)
      const fetchData=()=>{
            setLoading(true)
             fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input==''?'kids':input}&safeSearch=strict&type=education&type=game&type=music&type=shows&type=cartoon&key=AIzaSyCLEaRiwAiVjPn0HwcYmq4VkyMcACrybOY`)
            .then((res)=>res.json())
            .then(data=>{
                  setLoading(false)
                  //setData(data.items)
                  dispatch({type:'add',payload:data.items})
                  
            })
      }
      return (<View style={{height:'100%',backgroundColor:'#f2d7c9',}}>
            <View style={styles.container}>
                  <Icon name='arrowleft' size={30} color="red" onPress={()=>navigation.goBack()}/>
                  <TextInput 
                  style={styles.input}
                  value={input}
                  onChangeText={(input)=>setInput(input)}
                  />
                  <Icon2 name="search" size={32} color="red" onPress={()=>fetchData()}/>
            </View>
           {loading? <ActivityIndicator  style={{position:'absolute',top:'50%',left:'50%',}}size={"large"} color="red"/>:null}
            <FlatList
            keyExtractor={item=>item.id.videoId}
            data={data1}
            renderItem={({item})=><MineCard title={item.snippet.title} videoId={item.id.videoId} channel = {item.snippet.channelTitle}/>}
            />
            </View>
      )
}

export default SearchScreen

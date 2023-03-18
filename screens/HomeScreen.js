import { View, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import EventList from '../components/events/EventList'
import Map from '../components/map/Map';

const HomeScreen = () => {

  const [data, setData] = useState([])

  useEffect(()=> {
    fetchData()
  },[])

  const fetchData = async() =>{
    try {
      const response = await fetch('http://10.0.2.2:8000/api/events/')
      
      const data = await response.json()

      setData(data)
      console.log(data)

    } catch (error) {
        console.log(error.message);
    }


  }

  return (
    <View style={styles.screen}>
      {/* <Text>Hello World</Text> */}
      {/* <Button title="move to detail" onPress={()=> navigation.navigate('Event')}/> */}
      {/* <Map /> */}
      <View style={styles.event_screen}>
        <EventList data={data}/>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    
  },
  event_screen :{
    flex:1,
    padding: 40,
  }
})

export default HomeScreen
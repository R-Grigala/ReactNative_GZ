import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import EventList from '../components/events/EventList'
import Map from '../components/map/Map';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      {/* <Text>Hello World</Text> */}
      {/* <Button title="move to detail" onPress={()=> navigation.navigate('Event')}/> */}
      <Map />
      <View style={styles.event_screen}>
        <EventList/>
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
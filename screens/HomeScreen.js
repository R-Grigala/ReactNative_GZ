import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import EventList from '../components/events/EventList'
import Map from '../components/Map';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      {/* <Text>Hello World</Text> */}
      {/* <Button title="move to detail" onPress={()=> navigation.navigate('Event')}/> */}
      {/* <Map style={styles.map}/> */}
      <EventList style={styles.event}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },
  map: {
    flex:1
  },
  event: {
    flex:1
  }
})

export default HomeScreen
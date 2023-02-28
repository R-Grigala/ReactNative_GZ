import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import EventList from '../components/events/EventList'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <Text>Hello World</Text>
      {/* <Button title="move to detail" onPress={()=> navigation.navigate('Event')}/> */}
      <EventList />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  }
})

export default HomeScreen